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
    
    // Missing methods implementation
    calculateOverallTrend(metrics) {
        return metrics.progressTrend || { direction: 'stable', change: 0 };
    }
    
    identifyStrengthAreas(metrics) {
        return Object.entries(metrics.topicStats || {})
            .filter(([_, stats]) => stats.accuracy >= 80)
            .map(([topic, stats]) => ({ topic, accuracy: stats.accuracy }))
            .slice(0, 3);
    }
    
    identifyImprovementAreas(metrics) {
        return Object.entries(metrics.topicStats || {})
            .filter(([_, stats]) => stats.needsAttention)
            .map(([topic, stats]) => ({ topic, accuracy: stats.accuracy }))
            .slice(0, 3);
    }
    
    findOptimalStudyTime(sessions) {
        if (sessions.length === 0) return 'Not enough data';
        
        // Group sessions by hour of day
        const hourStats = {};
        sessions.forEach(session => {
            const hour = new Date(session.startTime).getHours();
            if (!hourStats[hour]) hourStats[hour] = { total: 0, accuracy: 0 };
            hourStats[hour].total++;
            hourStats[hour].accuracy += session.accuracy || 0;
        });
        
        // Find best performing hour
        let bestHour = 0;
        let bestAccuracy = 0;
        Object.entries(hourStats).forEach(([hour, stats]) => {
            const avgAccuracy = stats.accuracy / stats.total;
            if (avgAccuracy > bestAccuracy) {
                bestAccuracy = avgAccuracy;
                bestHour = parseInt(hour);
            }
        });
        
        return `${bestHour}:00 - ${bestHour + 1}:00`;
    }
    
    findOptimalSessionLength(sessions) {
        if (sessions.length === 0) return 'Not enough data';
        
        const avgDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0) / sessions.length;
        const minutes = Math.round(avgDuration / (60 * 1000));
        
        return `${minutes} minutes`;
    }
    
    calculateWeeklyProgress() {
        const thisWeek = this.getPerformanceMetrics('week');
        return {
            questionsAnswered: thisWeek.totalQuestions,
            accuracy: thisWeek.accuracy,
            studyTime: thisWeek.totalTimeSpent
        };
    }
    
    projectGrowth(metrics) {
        const trend = metrics.progressTrend;
        if (trend.direction === 'improving') {
            return `+${trend.change}% improvement expected`;
        } else if (trend.direction === 'declining') {
            return `Risk of ${Math.abs(trend.change)}% decline`;
        } else {
            return 'Stable performance expected';
        }
    }
    
    calculateLearningVelocity(metrics) {
        return {
            questionsPerDay: Math.round(metrics.totalQuestions / 7),
            accuracyTrend: metrics.progressTrend.direction,
            pace: metrics.totalQuestions > 50 ? 'High' : metrics.totalQuestions > 20 ? 'Medium' : 'Low'
        };
    }
    
    calculateRetentionRate() {
        const interactions = this.getInteractions('month');
        if (interactions.length < 10) return 0;
        
        // Simple retention calculation based on repeated correct answers
        const questionResults = {};
        interactions.forEach(interaction => {
            if (!questionResults[interaction.questionId]) {
                questionResults[interaction.questionId] = [];
            }
            questionResults[interaction.questionId].push(interaction.isCorrect);
        });
        
        let retainedCount = 0;
        let totalRepeated = 0;
        
        Object.values(questionResults).forEach(results => {
            if (results.length > 1) {
                totalRepeated++;
                // If the most recent attempt was correct, consider it retained
                if (results[results.length - 1]) {
                    retainedCount++;
                }
            }
        });
        
        return totalRepeated > 0 ? Math.round((retainedCount / totalRepeated) * 100) : 0;
    }
    
    calculateMasteryDistribution(metrics) {
        const topics = Object.values(metrics.topicStats || {});
        if (topics.length === 0) return { strong: 0, medium: 0, weak: 0 };
        
        let strong = 0, medium = 0, weak = 0;
        
        topics.forEach(topic => {
            if (topic.accuracy >= 80) strong++;
            else if (topic.accuracy >= 60) medium++;
            else weak++;
        });
        
        return { strong, medium, weak };
    }
    
    calculateSubjectImprovement(subject, interactions) {
        if (interactions.length < 4) return 0;
        
        // Sort by timestamp to see progression
        const sorted = interactions.sort((a, b) => a.timestamp - b.timestamp);
        
        // Compare first half vs second half
        const midpoint = Math.floor(sorted.length / 2);
        const firstHalf = sorted.slice(0, midpoint);
        const secondHalf = sorted.slice(midpoint);
        
        if (firstHalf.length === 0 || secondHalf.length === 0) return 0;
        
        const firstAccuracy = (firstHalf.filter(i => i.isCorrect).length / firstHalf.length) * 100;
        const secondAccuracy = (secondHalf.filter(i => i.isCorrect).length / secondHalf.length) * 100;
        
        return Utils.roundTo(secondAccuracy - firstAccuracy, 1);
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

    // Teacher Dashboard - Student Alert System
    generateStudentAlerts() {
        const metrics = this.getPerformanceMetrics('week');
        const alerts = [];
        
        // Critical performance alerts
        if (metrics.accuracy < 50) {
            alerts.push({
                type: 'critical_performance',
                priority: 'critical',
                title: 'Urgent: Very Low Accuracy',
                description: `Student accuracy is ${metrics.accuracy}% - needs immediate help`,
                action: 'Schedule one-on-one session',
                details: {
                    accuracy: metrics.accuracy,
                    questionsAttempted: metrics.totalQuestions
                }
            });
        } else if (metrics.accuracy < 60) {
            alerts.push({
                type: 'low_performance',
                priority: 'high',
                title: 'Low Accuracy Alert',
                description: `Student struggling with ${metrics.accuracy}% accuracy`,
                action: 'Review weak topics together',
                details: {
                    accuracy: metrics.accuracy,
                    questionsAttempted: metrics.totalQuestions
                }
            });
        }
        
        // Declining performance trend
        if (metrics.progressTrend.direction === 'declining') {
            alerts.push({
                type: 'declining_trend',
                priority: 'high',
                title: 'Performance Declining',
                description: `Accuracy dropped by ${Math.abs(metrics.progressTrend.change)}%`,
                action: 'Check for learning obstacles',
                details: {
                    change: metrics.progressTrend.change,
                    previousAccuracy: metrics.progressTrend.firstHalfAccuracy,
                    currentAccuracy: metrics.progressTrend.secondHalfAccuracy
                }
            });
        }
        
        // Inconsistent study patterns
        if (metrics.consistency < 0.3) {
            alerts.push({
                type: 'inconsistent_study',
                priority: 'medium',
                title: 'Inconsistent Study Pattern',
                description: 'Student has irregular practice sessions',
                action: 'Help establish study routine',
                details: {
                    consistency: metrics.consistency,
                    streak: metrics.studyStreak
                }
            });
        }
        
        // Subject-specific struggles
        Object.entries(metrics.subjectStats).forEach(([subject, stats]) => {
            if (stats.accuracy < 50) {
                alerts.push({
                    type: 'subject_struggle',
                    priority: 'high',
                    title: `${Utils.capitalize(subject)} Crisis`,
                    description: `Only ${stats.accuracy}% accuracy in ${subject}`,
                    action: `Focus on ${subject} fundamentals`,
                    details: {
                        subject,
                        accuracy: stats.accuracy,
                        questionsAnswered: stats.questionsAnswered
                    }
                });
            }
        });
        
        // Topic mastery alerts
        const criticalTopics = Object.entries(metrics.topicStats)
            .filter(([_, stats]) => stats.needsAttention && stats.accuracy < 40)
            .map(([topic, stats]) => ({ topic, ...stats }));
            
        if (criticalTopics.length > 0) {
            alerts.push({
                type: 'critical_topics',
                priority: 'high',
                title: 'Critical Knowledge Gaps',
                description: `Student failing in: ${criticalTopics.map(t => t.topic).join(', ')}`,
                action: 'Address foundational concepts',
                details: {
                    topics: criticalTopics
                }
            });
        }
        
        // Engagement concerns
        if (metrics.studyStreak === 0 && metrics.totalQuestions > 0) {
            const lastSession = this.getSessions('week')[0];
            const daysSinceLastSession = lastSession ? 
                Math.floor((Date.now() - lastSession.startTime) / (24 * 60 * 60 * 1000)) : 7;
                
            if (daysSinceLastSession > 3) {
                alerts.push({
                    type: 'disengagement',
                    priority: 'medium',
                    title: 'Student Disengagement',
                    description: `No practice for ${daysSinceLastSession} days`,
                    action: 'Check motivation and obstacles',
                    details: {
                        daysSinceLastSession,
                        totalQuestions: metrics.totalQuestions
                    }
                });
            }
        }
        
        return alerts.sort((a, b) => {
            const priorityOrder = { critical: 3, high: 2, medium: 1, low: 0 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
    }
    
    // Export data for teacher dashboard
    exportStudentData() {
        const metrics = this.getPerformanceMetrics('month');
        const alerts = this.generateStudentAlerts();
        const insights = this.getStudyInsights();
        
        return {
            studentId: this.getStudentId(),
            lastUpdated: new Date().toISOString(),
            alerts,
            summary: {
                overallAccuracy: metrics.accuracy,
                totalQuestions: metrics.totalQuestions,
                studyStreak: metrics.studyStreak,
                consistency: metrics.consistency,
                trend: metrics.progressTrend.direction
            },
            subjects: metrics.subjectStats,
            criticalTopics: Object.entries(metrics.topicStats)
                .filter(([_, stats]) => stats.needsAttention)
                .map(([topic, stats]) => ({
                    topic,
                    subject: stats.subject,
                    accuracy: stats.accuracy,
                    mastery: stats.mastery
                })),
            recommendations: this.generateRecommendations(),
            insights
        };
    }
    
    getStudentId() {
        // Generate or retrieve a unique student identifier
        let studentId = Utils.storage.get('waec_student_id');
        if (!studentId) {
            studentId = 'student_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            Utils.storage.set('waec_student_id', studentId);
        }
        return studentId;
    }
    
    // Parent Progress Report System
    generateParentReport(timeRange = 'week') {
        const metrics = this.getPerformanceMetrics(timeRange);
        const insights = this.getStudyInsights();
        const recommendations = this.generateRecommendations();
        
        const report = {
            reportDate: new Date().toLocaleDateString(),
            timeRange: timeRange,
            studentName: this.getStudentName(),
            
            // Study habits summary
            studyHabits: {
                totalStudyTime: this.formatStudyTime(metrics.totalTimeSpent),
                sessionsCompleted: metrics.sessionsCompleted,
                studyStreak: metrics.studyStreak,
                consistency: this.getConsistencyDescription(metrics.consistency),
                averageSessionTime: this.formatStudyTime(metrics.totalTimeSpent / Math.max(1, metrics.sessionsCompleted))
            },
            
            // Academic performance
            performance: {
                overallAccuracy: `${metrics.accuracy}%`,
                totalQuestionsAnswered: metrics.totalQuestions,
                correctAnswers: metrics.correctAnswers,
                trend: this.getTrendDescription(metrics.progressTrend),
                grade: this.calculateLetterGrade(metrics.accuracy)
            },
            
            // Subject breakdown
            subjects: Object.entries(metrics.subjectStats).map(([subject, stats]) => ({
                name: Utils.capitalize(subject),
                accuracy: `${stats.accuracy}%`,
                questionsAnswered: stats.questionsAnswered,
                timeSpent: this.formatStudyTime(stats.timeSpent),
                grade: this.calculateLetterGrade(stats.accuracy),
                status: this.getSubjectStatus(stats.accuracy, stats.improvement)
            })),
            
            // Areas needing attention
            areasNeedingAttention: Object.entries(metrics.topicStats)
                .filter(([_, stats]) => stats.needsAttention)
                .map(([topic, stats]) => ({
                    topic,
                    subject: Utils.capitalize(stats.subject),
                    accuracy: `${stats.accuracy}%`,
                    mastery: `${stats.mastery}%`,
                    priority: stats.accuracy < 40 ? 'High' : 'Medium'
                }))
                .sort((a, b) => parseFloat(a.accuracy) - parseFloat(b.accuracy))
                .slice(0, 5),
            
            // Strengths
            strengths: Object.entries(metrics.topicStats)
                .filter(([_, stats]) => stats.accuracy >= 80 && stats.mastery >= 75)
                .map(([topic, stats]) => ({
                    topic,
                    subject: Utils.capitalize(stats.subject),
                    accuracy: `${stats.accuracy}%`,
                    mastery: `${stats.mastery}%`
                }))
                .sort((a, b) => parseFloat(b.accuracy) - parseFloat(a.accuracy))
                .slice(0, 5),
            
            // Parent-friendly recommendations
            parentRecommendations: this.generateParentRecommendations(metrics, recommendations),
            
            // Motivational insights
            achievements: this.getAchievements(metrics),
            
            // Next steps
            nextSteps: this.getNextSteps(metrics, recommendations)
        };
        
        return report;
    }
    
    getStudentName() {
        return Utils.storage.get('waec_student_name', 'Your Child');
    }
    
    setStudentName(name) {
        Utils.storage.set('waec_student_name', name);
    }
    
    formatStudyTime(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }
    
    getConsistencyDescription(consistency) {
        if (consistency >= 0.8) return 'Excellent - studies regularly';
        if (consistency >= 0.6) return 'Good - mostly consistent';
        if (consistency >= 0.4) return 'Fair - somewhat irregular';
        return 'Needs improvement - irregular study pattern';
    }
    
    getTrendDescription(progressTrend) {
        const change = Math.abs(progressTrend.change);
        if (progressTrend.direction === 'improving') {
            return `Improving - accuracy up ${change}%`;
        } else if (progressTrend.direction === 'declining') {
            return `Declining - accuracy down ${change}%`;
        } else {
            return 'Stable performance';
        }
    }
    
    calculateLetterGrade(accuracy) {
        if (accuracy >= 90) return 'A+';
        if (accuracy >= 80) return 'A';
        if (accuracy >= 70) return 'B';
        if (accuracy >= 60) return 'C';
        if (accuracy >= 50) return 'D';
        return 'F';
    }
    
    getSubjectStatus(accuracy, improvement) {
        if (accuracy >= 80) {
            return improvement > 5 ? 'Excellent & Improving' : 'Excellent';
        } else if (accuracy >= 70) {
            return improvement > 5 ? 'Good & Improving' : accuracy < 75 ? 'Good - Room for Growth' : 'Good';
        } else if (accuracy >= 60) {
            return improvement > 5 ? 'Fair & Improving' : 'Fair - Needs Attention';
        } else {
            return improvement > 5 ? 'Struggling but Improving' : 'Needs Immediate Help';
        }
    }
    
    generateParentRecommendations(metrics, recommendations) {
        const parentRecs = [];
        
        // Study habit recommendations
        if (metrics.consistency < 0.5) {
            parentRecs.push({
                category: 'Study Routine',
                recommendation: 'Help establish a daily 15-20 minute WAEC practice routine',
                reason: 'Consistent short sessions are more effective than long cramming sessions'
            });
        }
        
        if (metrics.studyStreak === 0) {
            parentRecs.push({
                category: 'Motivation',
                recommendation: 'Encourage daily practice with small rewards or recognition',
                reason: 'Building momentum is key to exam success'
            });
        }
        
        // Academic recommendations
        const criticalSubjects = Object.entries(metrics.subjectStats)
            .filter(([_, stats]) => stats.accuracy < 60);
            
        if (criticalSubjects.length > 0) {
            parentRecs.push({
                category: 'Academic Support',
                recommendation: `Consider extra help in ${criticalSubjects.map(([subject]) => Utils.capitalize(subject)).join(', ')}`,
                reason: 'These subjects need focused attention before the WAEC exam'
            });
        }
        
        // Positive reinforcement
        if (metrics.accuracy >= 70) {
            parentRecs.push({
                category: 'Encouragement',
                recommendation: 'Celebrate your child\'s good progress and maintain momentum',
                reason: 'Positive reinforcement helps maintain motivation for continued success'
            });
        }
        
        return parentRecs.slice(0, 4);
    }
    
    getAchievements(metrics) {
        const achievements = [];
        
        if (metrics.studyStreak >= 7) {
            achievements.push(`🔥 ${metrics.studyStreak}-day study streak!`);
        }
        
        if (metrics.accuracy >= 80) {
            achievements.push(`🎯 High accuracy (${metrics.accuracy}%)`);
        }
        
        const excellentSubjects = Object.entries(metrics.subjectStats)
            .filter(([_, stats]) => stats.accuracy >= 80)
            .map(([subject]) => Utils.capitalize(subject));
            
        if (excellentSubjects.length > 0) {
            achievements.push(`⭐ Excellent in ${excellentSubjects.join(', ')}`);
        }
        
        if (metrics.totalQuestions >= 100) {
            achievements.push(`📚 Answered ${metrics.totalQuestions}+ questions`);
        }
        
        if (metrics.progressTrend.direction === 'improving') {
            achievements.push(`📈 Performance improving (+${metrics.progressTrend.change}%)`);
        }
        
        return achievements;
    }
    
    getNextSteps(metrics, recommendations) {
        const steps = [];
        
        // Get top recommendations and convert to next steps
        recommendations.slice(0, 3).forEach(rec => {
            steps.push({
                action: rec.title,
                description: rec.description,
                timeframe: this.getTimeframeForRecommendation(rec.type)
            });
        });
        
        // Add exam readiness step if close to exam
        const examDate = Utils.storage.get('waec_exam_date');
        if (examDate) {
            const daysToExam = Math.ceil((new Date(examDate) - new Date()) / (24 * 60 * 60 * 1000));
            if (daysToExam <= 90 && daysToExam > 0) {
                steps.unshift({
                    action: 'Exam Preparation Focus',
                    description: `${daysToExam} days to WAEC - intensify practice in weak areas`,
                    timeframe: 'Immediate'
                });
            }
        }
        
        return steps;
    }
    
    getTimeframeForRecommendation(type) {
        switch (type) {
            case 'improvement': return 'This week';
            case 'topics': return 'Next 2 weeks';
            case 'consistency': return 'Daily';
            case 'speed': return 'Next week';
            default: return 'Ongoing';
        }
    }
    
    // Generate shareable parent report
    generateShareableReport(timeRange = 'week') {
        const report = this.generateParentReport(timeRange);
        
        return {
            title: `WAEC Progress Report - ${report.reportDate}`,
            summary: `${report.studentName} has completed ${report.studyHabits.sessionsCompleted} practice sessions with ${report.performance.overallAccuracy} accuracy`,
            data: report,
            shareText: this.generateShareText(report)
        };
    }
    
    generateShareText(report) {
        return `📊 WAEC Progress Update
        
📚 Study Time: ${report.studyHabits.totalStudyTime}
🎯 Overall Accuracy: ${report.performance.overallAccuracy}
📈 Trend: ${report.performance.trend}
🔥 Study Streak: ${report.studyHabits.studyStreak} days

${report.achievements.length > 0 ? '🏆 Achievements:\n' + report.achievements.join('\n') + '\n' : ''}
        
Keep up the great work! 💪`;
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