/**
 * Storage.js - Manages localStorage for WAEC Practice App
 * 
 * Data Schema:
 * - progress: { subject: { topic: { attempts, correct, streak, lastSeen, difficulty } } }
 * - examHistory: [ { date, score, subjects: {math, english, biology}, questions: [...] } ]
 * - settings: { examQuestions, examTime }
 * - mistakes: [ { questionId, subject, topic, attempts, lastMissed } ]
 */

class Storage {
    constructor() {
        this.initializeStorage();
    }

    // Initialize default storage structure
    initializeStorage() {
        if (!localStorage.getItem('waec_progress')) {
            this.resetProgress();
        }
        
        if (!localStorage.getItem('waec_settings')) {
            const defaultSettings = {
                examQuestions: 40,
                examTime: 45
            };
            localStorage.setItem('waec_settings', JSON.stringify(defaultSettings));
        }
        
        if (!localStorage.getItem('waec_exam_history')) {
            localStorage.setItem('waec_exam_history', JSON.stringify([]));
        }
        
        if (!localStorage.getItem('waec_mistakes')) {
            localStorage.setItem('waec_mistakes', JSON.stringify([]));
        }
    }

    // Progress tracking methods
    getProgress() {
        return JSON.parse(localStorage.getItem('waec_progress') || '{}');
    }

    getSubjectProgress(subject) {
        const progress = this.getProgress();
        return progress[subject] || {};
    }

    getTopicProgress(subject, topic) {
        const progress = this.getSubjectProgress(subject);
        return progress[topic] || {
            attempts: 0,
            correct: 0,
            streak: 0,
            lastSeen: null,
            difficulty: 0 // -1: hard, 0: medium, 1: easy
        };
    }

    updateTopicProgress(subject, topic, wasCorrect) {
        const progress = this.getProgress();
        
        if (!progress[subject]) {
            progress[subject] = {};
        }
        
        if (!progress[subject][topic]) {
            progress[subject][topic] = {
                attempts: 0,
                correct: 0,
                streak: 0,
                lastSeen: null,
                difficulty: 0
            };
        }
        
        const topicData = progress[subject][topic];
        topicData.attempts++;
        topicData.lastSeen = Date.now();
        
        if (wasCorrect) {
            topicData.correct++;
            topicData.streak++;
            // Increase difficulty if consistently correct
            if (topicData.streak >= 3) {
                topicData.difficulty = Math.min(1, topicData.difficulty + 0.1);
            }
        } else {
            topicData.streak = 0;
            // Decrease difficulty if incorrect
            topicData.difficulty = Math.max(-1, topicData.difficulty - 0.2);
        }
        
        localStorage.setItem('waec_progress', JSON.stringify(progress));
    }

    // Calculate topic mastery percentage (0-100)
    getTopicMastery(subject, topic) {
        const topicData = this.getTopicProgress(subject, topic);
        if (topicData.attempts === 0) return 0;
        
        const accuracy = (topicData.correct / topicData.attempts) * 100;
        const streakBonus = Math.min(topicData.streak * 5, 20); // Max 20% bonus
        const masteryScore = Math.min(accuracy + streakBonus, 100);
        
        return Math.round(masteryScore);
    }

    // Calculate overall subject mastery
    getSubjectMastery(subject, topics) {
        if (!topics || topics.length === 0) return 0;
        
        let totalMastery = 0;
        let topicCount = 0;
        
        topics.forEach(topic => {
            const mastery = this.getTopicMastery(subject, topic);
            totalMastery += mastery;
            topicCount++;
        });
        
        return topicCount > 0 ? Math.round(totalMastery / topicCount) : 0;
    }

    // Get weak topics (mastery < 50%)
    getWeakTopics(subject, topics) {
        return topics.filter(topic => {
            const mastery = this.getTopicMastery(subject, topic);
            return mastery < 50;
        });
    }

    // Get strong topics (mastery >= 80%)
    getStrongTopics(subject, topics) {
        return topics.filter(topic => {
            const mastery = this.getTopicMastery(subject, topic);
            return mastery >= 80;
        });
    }

    // Mistake tracking
    getMistakes() {
        return JSON.parse(localStorage.getItem('waec_mistakes') || '[]');
    }

    addMistake(questionId, subject, topic) {
        let mistakes = this.getMistakes();
        
        // Find existing mistake or create new one
        let mistake = mistakes.find(m => m.questionId === questionId);
        
        if (mistake) {
            mistake.attempts++;
            mistake.lastMissed = Date.now();
        } else {
            mistake = {
                questionId,
                subject,
                topic,
                attempts: 1,
                lastMissed: Date.now()
            };
            mistakes.push(mistake);
        }
        
        // Keep only last 100 mistakes to avoid bloat
        mistakes.sort((a, b) => b.lastMissed - a.lastMissed);
        mistakes = mistakes.slice(0, 100);
        
        localStorage.setItem('waec_mistakes', JSON.stringify(mistakes));
    }

    removeMistake(questionId) {
        let mistakes = this.getMistakes();
        mistakes = mistakes.filter(m => m.questionId !== questionId);
        localStorage.setItem('waec_mistakes', JSON.stringify(mistakes));
    }

    // Exam history
    getExamHistory() {
        return JSON.parse(localStorage.getItem('waec_exam_history') || '[]');
    }

    saveExamResult(examData) {
        let history = this.getExamHistory();
        
        const examResult = {
            date: Date.now(),
            score: examData.score,
            totalQuestions: examData.totalQuestions,
            subjects: examData.subjects, // {math: {correct, total}, english: {...}, biology: {...}}
            timeSpent: examData.timeSpent,
            questions: examData.questions // For review purposes
        };
        
        history.unshift(examResult);
        
        // Keep only last 20 exam results
        history = history.slice(0, 20);
        
        localStorage.setItem('waec_exam_history', JSON.stringify(history));
    }

    // Settings
    getSettings() {
        return JSON.parse(localStorage.getItem('waec_settings') || '{}');
    }

    updateSettings(newSettings) {
        const currentSettings = this.getSettings();
        const updatedSettings = { ...currentSettings, ...newSettings };
        localStorage.setItem('waec_settings', JSON.stringify(updatedSettings));
    }

    // Reset functions
    resetProgress() {
        const emptyProgress = {
            math: {},
            english: {},
            biology: {}
        };
        localStorage.setItem('waec_progress', JSON.stringify(emptyProgress));
    }

    resetAllData() {
        localStorage.removeItem('waec_progress');
        localStorage.removeItem('waec_exam_history');
        localStorage.removeItem('waec_mistakes');
        localStorage.removeItem('waec_settings');
        this.initializeStorage();
    }

    // Data export/import for backup
    exportData() {
        return {
            progress: this.getProgress(),
            examHistory: this.getExamHistory(),
            mistakes: this.getMistakes(),
            settings: this.getSettings(),
            exportDate: Date.now()
        };
    }

    importData(data) {
        try {
            if (data.progress) {
                localStorage.setItem('waec_progress', JSON.stringify(data.progress));
            }
            if (data.examHistory) {
                localStorage.setItem('waec_exam_history', JSON.stringify(data.examHistory));
            }
            if (data.mistakes) {
                localStorage.setItem('waec_mistakes', JSON.stringify(data.mistakes));
            }
            if (data.settings) {
                localStorage.setItem('waec_settings', JSON.stringify(data.settings));
            }
            return true;
        } catch (error) {
            console.error('Failed to import data:', error);
            return false;
        }
    }

    // Analytics helpers
    getStudyStats() {
        const progress = this.getProgress();
        const examHistory = this.getExamHistory();
        const mistakes = this.getMistakes();
        
        let totalQuestions = 0;
        let totalCorrect = 0;
        
        Object.values(progress).forEach(subject => {
            Object.values(subject).forEach(topic => {
                totalQuestions += topic.attempts;
                totalCorrect += topic.correct;
            });
        });
        
        return {
            totalQuestions,
            totalCorrect,
            accuracy: totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0,
            examsCompleted: examHistory.length,
            activeMistakes: mistakes.length,
            studyStreak: this.calculateStudyStreak()
        };
    }

    calculateStudyStreak() {
        const progress = this.getProgress();
        const now = Date.now();
        const dayMs = 24 * 60 * 60 * 1000;
        let streak = 0;
        let currentDay = now - (now % dayMs);
        
        while (true) {
            let foundActivity = false;
            
            Object.values(progress).forEach(subject => {
                Object.values(subject).forEach(topic => {
                    if (topic.lastSeen && 
                        topic.lastSeen >= currentDay && 
                        topic.lastSeen < currentDay + dayMs) {
                        foundActivity = true;
                    }
                });
            });
            
            if (foundActivity) {
                streak++;
                currentDay -= dayMs;
            } else {
                break;
            }
        }
        
        return streak;
    }
}

// Create global storage instance
window.storage = new Storage();