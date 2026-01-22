// AI-Powered Adaptive Learning Engine
class AdaptiveLearningEngine {
  constructor() {
    this.userProfile = this.loadUserProfile();
    this.learningPatterns = new Map();
    this.difficultyAdjustments = new Map();
  }

  loadUserProfile() {
    const saved = localStorage.getItem('waec_user_profile_v1');
    return saved ? JSON.parse(saved) : {
      learningStyle: 'balanced', // visual, auditory, kinesthetic, balanced
      currentLevel: 1,
      strengths: [],
      weaknesses: [],
      optimalSessionLength: 20,
      preferredTimeOfDay: null,
      averageResponseTime: 15, // seconds
      motivationLevel: 'medium' // low, medium, high
    };
  }

  saveUserProfile() {
    localStorage.setItem('waec_user_profile_v1', JSON.stringify(this.userProfile));
  }

  // Analyze user performance and adjust difficulty
  analyzePerformance(sessionData) {
    const { subject, topic, questions, answers, times, score } = sessionData;
    
    // Update learning patterns
    this.updateLearningPatterns(subject, topic, {
      accuracy: score / questions.length,
      averageTime: times.reduce((a, b) => a + b, 0) / times.length,
      timestamp: Date.now()
    });

    // Detect learning style
    this.detectLearningStyle(sessionData);
    
    // Calculate optimal difficulty for next session
    this.calculateOptimalDifficulty(subject, topic, sessionData);
    
    // Generate personalized insights
    return this.generateInsights(sessionData);
  }

  updateLearningPatterns(subject, topic, performance) {
    const key = `${subject}:${topic}`;
    if (!this.learningPatterns.has(key)) {
      this.learningPatterns.set(key, []);
    }
    
    const patterns = this.learningPatterns.get(key);
    patterns.push(performance);
    
    // Keep only last 20 sessions for each topic
    if (patterns.length > 20) {
      patterns.shift();
    }
    
    this.learningPatterns.set(key, patterns);
  }

  detectLearningStyle(sessionData) {
    const { times, questions, answers } = sessionData;
    
    // Analyze response patterns
    const quickAnswers = times.filter(t => t < 10).length;
    const slowAnswers = times.filter(t => t > 30).length;
    const accuracy = sessionData.score / questions.length;
    
    // Update learning style based on patterns
    if (quickAnswers > questions.length * 0.7 && accuracy > 0.8) {
      this.userProfile.learningStyle = 'intuitive';
    } else if (slowAnswers > questions.length * 0.5 && accuracy > 0.9) {
      this.userProfile.learningStyle = 'analytical';
    }
    
    this.saveUserProfile();
  }

  calculateOptimalDifficulty(subject, topic, sessionData) {
    const key = `${subject}:${topic}`;
    const patterns = this.learningPatterns.get(key) || [];
    
    if (patterns.length === 0) return 'medium';
    
    const recentPerformance = patterns.slice(-5);
    const avgAccuracy = recentPerformance.reduce((sum, p) => sum + p.accuracy, 0) / recentPerformance.length;
    const trend = this.calculateTrend(recentPerformance);
    
    let difficulty = 'medium';
    
    if (avgAccuracy > 0.85 && trend > 0.1) {
      difficulty = 'hard';
    } else if (avgAccuracy < 0.6 || trend < -0.1) {
      difficulty = 'easy';
    }
    
    this.difficultyAdjustments.set(key, difficulty);
    return difficulty;
  }

  calculateTrend(performances) {
    if (performances.length < 2) return 0;
    
    const first = performances[0].accuracy;
    const last = performances[performances.length - 1].accuracy;
    return last - first;
  }

  generateInsights(sessionData) {
    const insights = [];
    const { subject, score, questions, times } = sessionData;
    
    const accuracy = score / questions.length;
    const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    
    // Performance insights
    if (accuracy > 0.9) {
      insights.push({
        type: 'success',
        message: 'Excellent performance! Consider trying harder questions.',
        action: 'increase_difficulty'
      });
    } else if (accuracy < 0.6) {
      insights.push({
        type: 'warning',
        message: 'Focus on understanding concepts before speed.',
        action: 'review_basics'
      });
    }
    
    // Time-based insights
    if (avgTime < 8) {
      insights.push({
        type: 'info',
        message: 'You\'re answering quickly. Take time to read carefully.',
        action: 'slow_down'
      });
    } else if (avgTime > 45) {
      insights.push({
        type: 'info',
        message: 'Consider practicing more to improve speed.',
        action: 'speed_practice'
      });
    }
    
    // Pattern-based insights
    const weakTopics = this.identifyWeakTopics(subject);
    if (weakTopics.length > 0) {
      insights.push({
        type: 'suggestion',
        message: `Focus on: ${weakTopics.join(', ')}`,
        action: 'targeted_practice'
      });
    }
    
    return insights;
  }

  identifyWeakTopics(subject) {
    const weakTopics = [];
    
    for (const [key, patterns] of this.learningPatterns) {
      if (key.startsWith(subject + ':')) {
        const topic = key.split(':')[1];
        const recent = patterns.slice(-3);
        const avgAccuracy = recent.reduce((sum, p) => sum + p.accuracy, 0) / recent.length;
        
        if (avgAccuracy < 0.7) {
          weakTopics.push(topic);
        }
      }
    }
    
    return weakTopics;
  }

  // Generate personalized question recommendations
  recommendQuestions(allQuestions, subject, count = 20) {
    const recommendations = [];
    const weakTopics = this.identifyWeakTopics(subject);
    
    // Prioritize weak topics
    if (weakTopics.length > 0) {
      const weakQuestions = allQuestions.filter(q => weakTopics.includes(q.topic));
      recommendations.push(...weakQuestions.slice(0, Math.min(count * 0.6, weakQuestions.length)));
    }
    
    // Fill remaining with balanced selection
    const remainingCount = count - recommendations.length;
    const otherQuestions = allQuestions.filter(q => 
      !recommendations.includes(q) && 
      Math.random() > 0.3 // Add some randomness
    );
    
    recommendations.push(...this.shuffleArray(otherQuestions).slice(0, remainingCount));
    
    return this.shuffleArray(recommendations);
  }

  shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Predict user performance
  predictPerformance(subject, topic) {
    const key = `${subject}:${topic}`;
    const patterns = this.learningPatterns.get(key) || [];
    
    if (patterns.length === 0) return { confidence: 0, predictedScore: 0.5 };
    
    const recent = patterns.slice(-5);
    const trend = this.calculateTrend(recent);
    const avgAccuracy = recent.reduce((sum, p) => sum + p.accuracy, 0) / recent.length;
    
    const predictedScore = Math.max(0, Math.min(1, avgAccuracy + trend * 0.5));
    const confidence = Math.min(patterns.length / 10, 1); // More data = higher confidence
    
    return { confidence, predictedScore };
  }

  // Calculate learning velocity (how fast user is improving)
  getLearningVelocity(subject) {
    let totalImprovement = 0;
    let topicCount = 0;
    
    for (const [key, patterns] of this.learningPatterns) {
      if (key.startsWith(subject + ':') && patterns.length >= 3) {
        const improvement = this.calculateTrend(patterns);
        totalImprovement += improvement;
        topicCount++;
      }
    }
    
    return topicCount > 0 ? totalImprovement / topicCount : 0;
  }

  // Generate adaptive study plan
  generateStudyPlan(subject, timeAvailable = 30) {
    const plan = {
      totalTime: timeAvailable,
      sessions: [],
      focus: 'balanced'
    };
    
    const weakTopics = this.identifyWeakTopics(subject);
    const sessionLength = Math.min(this.userProfile.optimalSessionLength, timeAvailable);
    
    if (weakTopics.length > 0) {
      plan.focus = 'improvement';
      plan.sessions.push({
        type: 'targeted_practice',
        topics: weakTopics,
        duration: Math.ceil(timeAvailable * 0.7),
        questionCount: Math.ceil(sessionLength * 0.7)
      });
      
      plan.sessions.push({
        type: 'review',
        topics: 'all',
        duration: Math.floor(timeAvailable * 0.3),
        questionCount: Math.floor(sessionLength * 0.3)
      });
    } else {
      plan.focus = 'exploration';
      plan.sessions.push({
        type: 'comprehensive',
        topics: 'all',
        duration: timeAvailable,
        questionCount: sessionLength
      });
    }
    
    return plan;
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AdaptiveLearningEngine;
} else {
  window.AdaptiveLearningEngine = AdaptiveLearningEngine;
}