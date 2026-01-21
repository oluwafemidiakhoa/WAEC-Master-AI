/**
 * Selector.js - Adaptive question selection algorithm
 * Implements AST-inspired scheduling with 60/25/15 distribution
 */

class QuestionSelector {
    constructor(storage) {
        this.storage = storage;
        this.questions = {
            math: [],
            english: [],
            biology: []
        };
        this.topics = {
            math: [],
            english: [],
            biology: []
        };
    }

    // Load questions from JSON files
    async loadQuestions() {
        try {
            const subjects = ['math', 'english', 'biology'];
            
            for (const subject of subjects) {
                const response = await fetch(`data/${subject}.json`);
                if (response.ok) {
                    const data = await response.json();
                    this.questions[subject] = data;
                    this.topics[subject] = [...new Set(data.map(q => q.topic))];
                } else {
                    console.warn(`Could not load ${subject}.json`);
                    this.questions[subject] = [];
                    this.topics[subject] = [];
                }
            }
            
            console.log('Questions loaded:', {
                math: this.questions.math.length,
                english: this.questions.english.length,
                biology: this.questions.biology.length
            });
            
        } catch (error) {
            console.error('Error loading questions:', error);
        }
    }

    // Get all topics for a subject
    getTopics(subject) {
        return this.topics[subject] || [];
    }

    // Get questions for a specific topic
    getTopicQuestions(subject, topic) {
        return this.questions[subject].filter(q => q.topic === topic);
    }

    // Calculate topic priority score for adaptive selection
    calculateTopicPriority(subject, topic) {
        const topicData = this.storage.getTopicProgress(subject, topic);
        const mastery = this.storage.getTopicMastery(subject, topic);
        
        // Base priority inversely related to mastery
        let priority = Math.max(0, 100 - mastery);
        
        // Increase priority for topics with low accuracy
        if (topicData.attempts > 0) {
            const accuracy = (topicData.correct / topicData.attempts) * 100;
            if (accuracy < 50) {
                priority += 30;
            } else if (accuracy < 70) {
                priority += 15;
            }
        }
        
        // Time-based decay: increase priority for topics not seen recently
        if (topicData.lastSeen) {
            const daysSinceLastSeen = (Date.now() - topicData.lastSeen) / (24 * 60 * 60 * 1000);
            priority += Math.min(daysSinceLastSeen * 5, 25);
        } else {
            // Never seen before - medium priority
            priority += 20;
        }
        
        // Difficulty adjustment
        if (topicData.difficulty < -0.5) {
            priority += 20; // Boost hard topics
        } else if (topicData.difficulty > 0.5) {
            priority = Math.max(0, priority - 10); // Reduce easy topics
        }
        
        return Math.min(priority, 150); // Cap at 150
    }

    // Categorize topics by priority for adaptive selection
    categorizeTopics(subject) {
        const topics = this.getTopics(subject);
        const categorized = {
            weak: [],
            medium: [],
            strong: []
        };
        
        topics.forEach(topic => {
            const priority = this.calculateTopicPriority(subject, topic);
            const mastery = this.storage.getTopicMastery(subject, topic);
            
            if (priority >= 80 || mastery < 40) {
                categorized.weak.push({ topic, priority, mastery });
            } else if (priority >= 40 || mastery < 75) {
                categorized.medium.push({ topic, priority, mastery });
            } else {
                categorized.strong.push({ topic, priority, mastery });
            }
        });
        
        // Sort each category by priority (highest first)
        categorized.weak.sort((a, b) => b.priority - a.priority);
        categorized.medium.sort((a, b) => b.priority - a.priority);
        categorized.strong.sort((a, b) => b.priority - a.priority);
        
        return categorized;
    }

    // Adaptive topic selection (60% weak, 25% medium, 15% strong)
    selectAdaptiveTopic(subject) {
        const categories = this.categorizeTopics(subject);
        const random = Math.random() * 100;
        
        let selectedTopic;
        
        if (random < 60 && categories.weak.length > 0) {
            // 60% from weak topics
            selectedTopic = this.weightedRandomSelect(categories.weak);
        } else if (random < 85 && categories.medium.length > 0) {
            // 25% from medium topics
            selectedTopic = this.weightedRandomSelect(categories.medium);
        } else if (categories.strong.length > 0) {
            // 15% from strong topics
            selectedTopic = this.weightedRandomSelect(categories.strong);
        } else if (categories.medium.length > 0) {
            // Fallback to medium if no strong
            selectedTopic = this.weightedRandomSelect(categories.medium);
        } else if (categories.weak.length > 0) {
            // Final fallback to weak
            selectedTopic = this.weightedRandomSelect(categories.weak);
        } else {
            // No topics available
            const allTopics = this.getTopics(subject);
            return allTopics.length > 0 ? allTopics[0] : null;
        }
        
        return selectedTopic ? selectedTopic.topic : null;
    }

    // Weighted random selection within a category
    weightedRandomSelect(categoryItems) {
        if (categoryItems.length === 0) return null;
        if (categoryItems.length === 1) return categoryItems[0];
        
        // Use priority as weight, but add some randomness
        const totalWeight = categoryItems.reduce((sum, item) => sum + (item.priority + 10), 0);
        let random = Math.random() * totalWeight;
        
        for (const item of categoryItems) {
            random -= (item.priority + 10);
            if (random <= 0) {
                return item;
            }
        }
        
        return categoryItems[0]; // Fallback
    }

    // Select next question for practice mode
    selectPracticeQuestion(subject, topic = null) {
        if (topic) {
            // Specific topic requested
            const topicQuestions = this.getTopicQuestions(subject, topic);
            return this.selectQuestionFromPool(topicQuestions, subject, topic);
        } else {
            // Adaptive topic selection
            const selectedTopic = this.selectAdaptiveTopic(subject);
            if (!selectedTopic) return null;
            
            const topicQuestions = this.getTopicQuestions(subject, selectedTopic);
            return this.selectQuestionFromPool(topicQuestions, subject, selectedTopic);
        }
    }

    // Select question from a pool with mistake prioritization
    selectQuestionFromPool(questions, subject, topic) {
        if (questions.length === 0) return null;
        
        const mistakes = this.storage.getMistakes();
        const topicMistakes = mistakes.filter(m => 
            m.subject === subject && m.topic === topic
        );
        
        // 40% chance to select from recent mistakes if available
        if (topicMistakes.length > 0 && Math.random() < 0.4) {
            const mistakeIds = topicMistakes.map(m => m.questionId);
            const mistakeQuestions = questions.filter(q => mistakeIds.includes(q.id));
            
            if (mistakeQuestions.length > 0) {
                return this.randomSelect(mistakeQuestions);
            }
        }
        
        // Regular question selection
        return this.randomSelect(questions);
    }

    // Random selection utility
    randomSelect(array) {
        if (array.length === 0) return null;
        return array[Math.floor(Math.random() * array.length)];
    }

    // Generate balanced mock exam questions
    generateMockExam(totalQuestions = 40) {
        const subjects = ['math', 'english', 'biology'];
        const questionsPerSubject = Math.floor(totalQuestions / subjects.length);
        const remainder = totalQuestions % subjects.length;
        
        const examQuestions = [];
        
        subjects.forEach((subject, index) => {
            let subjectQuestionCount = questionsPerSubject;
            // Distribute remainder questions
            if (index < remainder) {
                subjectQuestionCount++;
            }
            
            const subjectQuestions = this.selectExamQuestions(subject, subjectQuestionCount);
            examQuestions.push(...subjectQuestions);
        });
        
        // Shuffle the final array
        return this.shuffleArray(examQuestions);
    }

    // Select questions for exam with topic balancing
    selectExamQuestions(subject, count) {
        const allQuestions = this.questions[subject];
        if (allQuestions.length === 0) return [];
        
        const topics = this.getTopics(subject);
        const questionsPerTopic = Math.max(1, Math.floor(count / topics.length));
        const selectedQuestions = [];
        
        // Try to get questions from each topic
        topics.forEach(topic => {
            const topicQuestions = this.getTopicQuestions(subject, topic);
            const shuffled = this.shuffleArray([...topicQuestions]);
            const selected = shuffled.slice(0, questionsPerTopic);
            selectedQuestions.push(...selected);
        });
        
        // If we need more questions, add random ones
        while (selectedQuestions.length < count && selectedQuestions.length < allQuestions.length) {
            const remaining = allQuestions.filter(q => 
                !selectedQuestions.some(sq => sq.id === q.id)
            );
            
            if (remaining.length > 0) {
                selectedQuestions.push(this.randomSelect(remaining));
            } else {
                break;
            }
        }
        
        // If we have too many, trim to exact count
        return selectedQuestions.slice(0, count);
    }

    // Shuffle array utility
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Get study recommendations
    getStudyRecommendations(subject, limit = 5) {
        const categories = this.categorizeTopics(subject);
        const recommendations = [];
        
        // Prioritize weak topics
        categories.weak.slice(0, 3).forEach(item => {
            recommendations.push({
                topic: item.topic,
                reason: `Low mastery (${item.mastery}%)`,
                priority: 'high',
                mastery: item.mastery
            });
        });
        
        // Add some medium topics
        categories.medium.slice(0, 2).forEach(item => {
            recommendations.push({
                topic: item.topic,
                reason: `Needs improvement (${item.mastery}%)`,
                priority: 'medium',
                mastery: item.mastery
            });
        });
        
        return recommendations.slice(0, limit);
    }
}

// Create global selector instance
window.selector = new QuestionSelector(window.storage);