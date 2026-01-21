/**
 * Analytics.js - Advanced learning analytics and insights
 * Provides detailed study patterns, performance tracking, and recommendations
 */

class Analytics {
    constructor(storage) {
        this.storage = storage;
        this.sessionData = {
            startTime: Date.now(),
            questionsAnswered: 0,
            correctAnswers: 0,
            subjects: new Set(),
            timeSpent: 0
        };
        
        this.insights = {
            learningPattern: null,
            peakPerformanceTime: null,
            strugglingTopics: [],
            strongTopics: [],
            studyStreak: 0,
            weeklyGoal: null
        };
    }

    // Session tracking
    startSession() {
        this.sessionData = {
            startTime: Date.now(),
            questionsAnswered: 0,
            correctAnswers: 0,
            subjects: new Set(),
            timeSpent: 0,
            interactions: []
        };
    }

    trackQuestionAnswer(questionData, isCorrect, timeSpent) {
        this.sessionData.questionsAnswered++;
        this.sessionData.subjects.add(questionData.subject);
        
        if (isCorrect) {
            this.sessionData.correctAnswers++;
        }
        
        // Record detailed interaction
        const interaction = {
            timestamp: Date.now(),
            questionId: questionData.id,
            subject: questionData.subject,
            topic: questionData.topic,
            difficulty: questionData.difficulty,
            isCorrect,
            timeSpent,
            sessionPosition: this.sessionData.questionsAnswered
        };
        
        this.sessionData.interactions.push(interaction);
        
        // Store in analytics history
        this.storeInteraction(interaction);
        
        // Update real-time insights
        this.updateRealTimeInsights();
    }

    trackTimeSpent(duration) {
        this.sessionData.timeSpent += duration;
    }

    endSession() {
        const sessionSummary = {
            ...this.sessionData,
            endTime: Date.now(),
            duration: Date.now() - this.sessionData.startTime,
            accuracy: this.sessionData.questionsAnswered > 0 ? 
                      (this.sessionData.correctAnswers / this.sessionData.questionsAnswered) * 100 : 0,
            subjects: Array.from(this.sessionData.subjects)
        };
        
        this.storeSession(sessionSummary);
        return sessionSummary;
    }

    // Data storage
    storeInteraction(interaction) {
        let interactions = Utils.storage.get('waec_analytics_interactions', []);
        interactions.push(interaction);
        
        // Keep only last 1000 interactions to manage storage
        if (interactions.length > 1000) {
            interactions = interactions.slice(-1000);
        }
        
        Utils.storage.set('waec_analytics_interactions', interactions);
    }

    storeSession(session) {
        let sessions = Utils.storage.get('waec_analytics_sessions', []);
        sessions.unshift(session);
        
        // Keep only last 50 sessions
        if (sessions.length > 50) {
            sessions = sessions.slice(0, 50);
        }
        
        Utils.storage.set('waec_analytics_sessions', sessions);
    }

    // Performance analysis
    getPerformanceMetrics(timeRange = 'week') {
        const interactions = this.getInteractions(timeRange);
        const sessions = this.getSessions(timeRange);
        
        if (interactions.length === 0) {
            return this.getEmptyMetrics();
        }
        
        // Basic metrics
        const totalQuestions = interactions.length;
        const correctAnswers = interactions.filter(i => i.isCorrect).length;
        const accuracy = (correctAnswers / totalQuestions) * 100;
        
        // Time metrics
        const totalTimeSpent = interactions.reduce((sum, i) => sum + i.timeSpent, 0);
        const averageTimePerQuestion = totalTimeSpent / totalQuestions;
        
        // Subject breakdown
        const subjectStats = this.calculateSubjectStats(interactions);
        
        // Topic analysis
        const topicStats = this.calculateTopicStats(interactions);
        
        // Progress trends
        const progressTrend = this.calculateProgressTrend(interactions);
        
        // Speed analysis
        const speedAnalysis = this.calculateSpeedAnalysis(interactions);
        
        // Difficulty analysis
        const difficultyAnalysis = this.calculateDifficultyAnalysis(interactions);
        
        return {
            totalQuestions,
            correctAnswers,
            accuracy: Utils.roundTo(accuracy, 1),
            totalTimeSpent,
            averageTimePerQuestion: Utils.roundTo(averageTimePerQuestion, 1),
            sessionsCompleted: sessions.length,
            subjectStats,
            topicStats,
            progressTrend,
            speedAnalysis,
            difficultyAnalysis,
            studyStreak: this.calculateStudyStreak(),
            peakHours: this.calculatePeakHours(sessions),
            consistency: this.calculateConsistency(sessions)
        };
    }

    // Subject-specific analytics
    calculateSubjectStats(interactions) {
        const subjectGroups = Utils.groupBy(interactions, 'subject');
        const stats = {};
        
        Object.entries(subjectGroups).forEach(([subject, subjectInteractions]) => {
            const correct = subjectInteractions.filter(i => i.isCorrect).length;
            const total = subjectInteractions.length;
            const timeSpent = subjectInteractions.reduce((sum, i) => sum + i.timeSpent, 0);
            
            stats[subject] = {
                questionsAnswered: total,
                correctAnswers: correct,
                accuracy: Utils.roundTo((correct / total) * 100, 1),
                timeSpent,
                averageTime: Utils.roundTo(timeSpent / total, 1),
                improvement: this.calculateSubjectImprovement(subject, subjectInteractions)
            };
        });
        
        return stats;
    }

    // Topic-specific analytics
    calculateTopicStats(interactions) {
        const topicGroups = Utils.groupBy(interactions, 'topic');
        const stats = {};
        
        Object.entries(topicGroups).forEach(([topic, topicInteractions]) => {
            const correct = topicInteractions.filter(i => i.isCorrect).length;
            const total = topicInteractions.length;
            const timeSpent = topicInteractions.reduce((sum, i) => sum + i.timeSpent, 0);
            
            const accuracy = (correct / total) * 100;
            const mastery = this.calculateTopicMastery(topicInteractions);
            
            stats[topic] = {
                subject: topicInteractions[0].subject,
                questionsAnswered: total,
                correctAnswers: correct,
                accuracy: Utils.roundTo(accuracy, 1),
                timeSpent,
                averageTime: Utils.roundTo(timeSpent / total, 1),
                mastery: Utils.roundTo(mastery, 1),
                trend: this.calculateTopicTrend(topicInteractions),
                needsAttention: accuracy < 60 || mastery < 50
            };
        });
        
        return stats;
    }

    // Calculate topic mastery based on multiple factors
    calculateTopicMastery(interactions) {
        if (interactions.length === 0) return 0;
        
        // Sort by timestamp to see progression
        const sorted = interactions.sort((a, b) => a.timestamp - b.timestamp);
        
        // Recent performance weight (last 10 questions or all if less)
        const recentCount = Math.min(10, sorted.length);
        const recent = sorted.slice(-recentCount);
        const recentAccuracy = (recent.filter(i => i.isCorrect).length / recent.length) * 100;
        
        // Overall accuracy
        const overallAccuracy = (sorted.filter(i => i.isCorrect).length / sorted.length) * 100;
        
        // Consistency (lower variance in recent performance is better)
        const consistency = this.calculateAccuracyConsistency(recent);
        
        // Speed factor (faster answers indicate confidence)
        const averageSpeed = recent.reduce((sum, i) => sum + i.timeSpent, 0) / recent.length;
        const speedFactor = Math.max(0, 100 - (averageSpeed / 1000) * 2); // Bonus for speed
        
        // Weighted mastery score
        const mastery = (
            recentAccuracy * 0.5 +     // Recent performance (50%)
            overallAccuracy * 0.3 +    // Overall performance (30%)
            consistency * 0.1 +        // Consistency (10%)
            speedFactor * 0.1          // Speed bonus (10%)
        );
        
        return Math.min(100, Math.max(0, mastery));
    }

    // Learning pattern analysis
    analyzeLearningPattern() {
        const sessions = this.getSessions('month');
        const interactions = this.getInteractions('month');
        
        if (sessions.length < 5) {
            return {
                type: 'insufficient_data',
                description: 'Need more practice sessions for analysis',
                confidence: 0
            };
        }
        
        // Analyze session frequency
        const sessionFrequency = this.analyzeSessionFrequency(sessions);
        
        // Analyze performance patterns
        const performancePattern = this.analyzePerformancePattern(interactions);
        
        // Analyze time patterns
        const timePattern = this.analyzeTimePattern(sessions);
        
        // Determine overall learning pattern
        const pattern = this.classifyLearningPattern({
            sessionFrequency,
            performancePattern,
            timePattern
        });
        
        return pattern;
    }

    classifyLearningPattern({ sessionFrequency, performancePattern, timePattern }) {
        // Pattern classification logic
        if (sessionFrequency.consistency > 0.8 && performancePattern.trend > 0.1) {
            return {
                type: 'steady_improver',
                description: 'Consistent practice with steady improvement',
                confidence: 0.9,
                recommendations: [
                    'Continue your excellent study routine',
                    'Consider increasing difficulty gradually',
                    'Focus on maintaining consistency'
                ]
            };
        } else if (sessionFrequency.burstiness > 0.6) {
            return {
                type: 'burst_learner',
                description: 'Intensive study sessions followed by breaks',
                confidence: 0.8,
                recommendations: [
                    'Try to maintain more regular practice',
                    'Set daily study reminders',
                    'Break long sessions into smaller chunks'
                ]
            };
        } else if (performancePattern.volatility > 0.3) {
            return {
                type: 'inconsistent_performer',
                description: 'Variable performance across sessions',
                confidence: 0.7,
                recommendations: [
                    'Focus on problematic topics',
                    'Review explanations more carefully',
                    'Practice at optimal times of day'
                ]
            };
        } else {
            return {
                type: 'developing',
                description: 'Still establishing learning patterns',
                confidence: 0.6,
                recommendations: [
                    'Establish a regular practice schedule',
                    'Track your optimal study times',
                    'Set achievable daily goals'
                ]
            };
        }
    }

    // Personalized recommendations
    generateRecommendations() {
        const metrics = this.getPerformanceMetrics('week');
        const learningPattern = this.analyzeLearningPattern();
        const recommendations = [];
        
        // Performance-based recommendations
        if (metrics.accuracy < 60) {
            recommendations.push({
                type: 'improvement',
                priority: 'high',
                title: 'Focus on Understanding',
                description: 'Your accuracy is below 60%. Take time to read explanations carefully.',
                action: 'Review weak topics'
            });
        }
        
        if (metrics.averageTimePerQuestion > 60000) { // > 1 minute
            recommendations.push({
                type: 'speed',
                priority: 'medium',
                title: 'Improve Response Speed',
                description: 'You\'re taking longer than average. Practice quick recall.',
                action: 'Timed practice sessions'
            });
        }
        
        // Topic-specific recommendations
        const weakTopics = Object.entries(metrics.topicStats)
            .filter(([topic, stats]) => stats.needsAttention)
            .sort((a, b) => a[1].accuracy - b[1].accuracy)
            .slice(0, 3);
        
        if (weakTopics.length > 0) {
            recommendations.push({
                type: 'topics',
                priority: 'high',
                title: 'Strengthen Weak Areas',
                description: `Focus on: ${weakTopics.map(([topic]) => topic).join(', ')}`,
                action: 'Practice weak topics'
            });
        }
        
        // Consistency recommendations
        if (metrics.consistency < 0.5) {
            recommendations.push({
                type: 'consistency',
                priority: 'medium',
                title: 'Build Study Habits',
                description: 'Try to practice regularly, even if for short periods.',
                action: 'Set daily reminders'
            });
        }
        
        // Pattern-based recommendations
        if (learningPattern.recommendations) {
            learningPattern.recommendations.forEach(rec => {
                recommendations.push({
                    type: 'pattern',
                    priority: 'low',
                    title: 'Learning Pattern Insight',
                    description: rec,
                    action: 'Adjust study approach'
                });
            });
        }
        
        return recommendations.slice(0, 5); // Return top 5 recommendations
    }

    // Study insights
    getStudyInsights() {
        const metrics = this.getPerformanceMetrics('month');
        const sessions = this.getSessions('month');
        
        const insights = {
            // Performance insights
            overallTrend: this.calculateOverallTrend(metrics),
            strengthAreas: this.identifyStrengthAreas(metrics),
            improvementAreas: this.identifyImprovementAreas(metrics),
            
            // Time insights
            optimalStudyTime: this.findOptimalStudyTime(sessions),
            sessionLengthOptimal: this.findOptimalSessionLength(sessions),
            
            // Goal insights
            weeklyProgress: this.calculateWeeklyProgress(),
            projectedGrowth: this.projectGrowth(metrics),
            
            // Behavioral insights
            learningVelocity: this.calculateLearningVelocity(metrics),
            retentionRate: this.calculateRetentionRate(),
            masteryDistribution: this.calculateMasteryDistribution(metrics)
        };
        
        return insights;
    }

    // Helper methods for calculations
    getInteractions(timeRange) {
        const interactions = Utils.storage.get('waec_analytics_interactions', []);
        const cutoff = this.getTimeRangeCutoff(timeRange);
        return interactions.filter(i => i.timestamp >= cutoff);
    }

    getSessions(timeRange) {
        const sessions = Utils.storage.get('waec_analytics_sessions', []);
        const cutoff = this.getTimeRangeCutoff(timeRange);
        return sessions.filter(s => s.startTime >= cutoff);
    }

    getTimeRangeCutoff(timeRange) {
        const now = Date.now();
        const day = 24 * 60 * 60 * 1000;
        
        switch (timeRange) {
            case 'day': return now - day;
            case 'week': return now - (7 * day);
            case 'month': return now - (30 * day);
            case 'year': return now - (365 * day);
            default: return 0;
        }
    }

    getEmptyMetrics() {
        return {
            totalQuestions: 0,
            correctAnswers: 0,
            accuracy: 0,
            totalTimeSpent: 0,
            averageTimePerQuestion: 0,
            sessionsCompleted: 0,
            subjectStats: {},
            topicStats: {},
            progressTrend: { direction: 'stable', change: 0 },
            speedAnalysis: { trend: 'stable', averageSpeed: 0 },
            difficultyAnalysis: {},
            studyStreak: 0,
            peakHours: [],
            consistency: 0
        };
    }

    // Additional calculation methods would go here...
    calculateProgressTrend(interactions) {
        if (interactions.length < 10) return { direction: 'stable', change: 0 };
        
        const chunks = Utils.chunk(interactions.sort((a, b) => a.timestamp - b.timestamp), 5);
        if (chunks.length < 2) return { direction: 'stable', change: 0 };
        
        const firstHalf = chunks.slice(0, Math.floor(chunks.length / 2)).flat();
        const secondHalf = chunks.slice(Math.floor(chunks.length / 2)).flat();
        
        const firstAccuracy = (firstHalf.filter(i => i.isCorrect).length / firstHalf.length) * 100;
        const secondAccuracy = (secondHalf.filter(i => i.isCorrect).length / secondHalf.length) * 100;
        
        const change = secondAccuracy - firstAccuracy;
        
        return {
            direction: change > 5 ? 'improving' : change < -5 ? 'declining' : 'stable',
            change: Utils.roundTo(change, 1),
            firstHalfAccuracy: Utils.roundTo(firstAccuracy, 1),
            secondHalfAccuracy: Utils.roundTo(secondAccuracy, 1)
        };
    }

    calculateStudyStreak() {
        const sessions = Utils.storage.get('waec_analytics_sessions', []);
        const dayMs = 24 * 60 * 60 * 1000;
        let streak = 0;
        let currentDay = new Date().setHours(0, 0, 0, 0);
        
        while (true) {
            const hasSession = sessions.some(session => {
                const sessionDay = new Date(session.startTime).setHours(0, 0, 0, 0);
                return sessionDay === currentDay;
            });
            
            if (hasSession) {
                streak++;
                currentDay -= dayMs;
            } else {
                break;
            }
        }
        
        return streak;
    }

    // Real-time insights during practice
    updateRealTimeInsights() {
        // Calculate live session statistics
        const sessionAccuracy = this.sessionData.questionsAnswered > 0 ? 
            (this.sessionData.correctAnswers / this.sessionData.questionsAnswered) * 100 : 0;
        
        // Emit events for UI updates
        window.dispatchEvent(new CustomEvent('analytics:sessionUpdate', {
            detail: {
                accuracy: Utils.roundTo(sessionAccuracy, 1),
                questionsAnswered: this.sessionData.questionsAnswered,
                timeSpent: this.sessionData.timeSpent
            }
        }));
    }
}

// Create global analytics instance
window.analytics = new Analytics(window.storage);