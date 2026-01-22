// Gamification and Achievement System
class AchievementSystem {
  constructor() {
    this.achievements = this.initializeAchievements();
    this.userAchievements = this.loadUserAchievements();
    this.onAchievementUnlocked = null; // Callback for achievement notifications
  }

  initializeAchievements() {
    return [
      {
        id: 'first_quiz',
        name: 'Getting Started',
        description: 'Complete your first quiz',
        icon: '🚀',
        category: 'progress',
        requirement: { type: 'quizzes_completed', value: 1 }
      },
      {
        id: 'perfect_score',
        name: 'Perfect Score',
        description: 'Get 100% on any quiz',
        icon: '💯',
        category: 'performance',
        requirement: { type: 'perfect_scores', value: 1 }
      },
      {
        id: 'week_streak',
        name: 'Week Warrior',
        description: 'Practice for 7 days in a row',
        icon: '🔥',
        category: 'consistency',
        requirement: { type: 'max_streak', value: 7 }
      },
      {
        id: 'speed_demon',
        name: 'Speed Demon',
        description: 'Answer 10 questions in under 5 seconds each',
        icon: '⚡',
        category: 'speed',
        requirement: { type: 'fast_answers', value: 10 }
      },
      {
        id: 'math_master',
        name: 'Math Master',
        description: 'Get 90%+ on 5 mathematics quizzes',
        icon: '🧮',
        category: 'subject',
        requirement: { type: 'subject_mastery', subject: 'mathematics', value: 5 }
      },
      {
        id: 'english_expert',
        name: 'English Expert',
        description: 'Get 90%+ on 5 English quizzes',
        icon: '📚',
        category: 'subject',
        requirement: { type: 'subject_mastery', subject: 'english', value: 5 }
      },
      {
        id: 'science_scholar',
        name: 'Science Scholar',
        description: 'Get 80%+ on Physics, Chemistry, and Biology',
        icon: '🔬',
        category: 'subject',
        requirement: { type: 'multi_subject', subjects: ['physics', 'chemistry', 'biology'], value: 80 }
      },
      {
        id: 'century_club',
        name: 'Century Club',
        description: 'Answer 100 questions correctly',
        icon: '💪',
        category: 'progress',
        requirement: { type: 'correct_answers', value: 100 }
      },
      {
        id: 'dedicated_learner',
        name: 'Dedicated Learner',
        description: 'Practice for 30 days total',
        icon: '🎓',
        category: 'dedication',
        requirement: { type: 'total_practice_days', value: 30 }
      },
      {
        id: 'improvement_champion',
        name: 'Improvement Champion',
        description: 'Improve score by 30% in any subject',
        icon: '📈',
        category: 'growth',
        requirement: { type: 'score_improvement', value: 30 }
      },
      {
        id: 'topic_explorer',
        name: 'Topic Explorer',
        description: 'Try questions from all available topics',
        icon: '🗺️',
        category: 'exploration',
        requirement: { type: 'topics_tried', value: 'all' }
      },
      {
        id: 'night_owl',
        name: 'Night Owl',
        description: 'Complete 5 quizzes after 10 PM',
        icon: '🦉',
        category: 'time',
        requirement: { type: 'late_night_quizzes', value: 5 }
      },
      {
        id: 'early_bird',
        name: 'Early Bird',
        description: 'Complete 5 quizzes before 8 AM',
        icon: '🐦',
        category: 'time',
        requirement: { type: 'early_morning_quizzes', value: 5 }
      },
      {
        id: 'marathon_runner',
        name: 'Marathon Runner',
        description: 'Complete a 50+ question session',
        icon: '🏃',
        category: 'endurance',
        requirement: { type: 'long_session', value: 50 }
      },
      {
        id: 'comeback_kid',
        name: 'Comeback Kid',
        description: 'Improve from below 50% to above 80% in one session',
        icon: '🎭',
        category: 'resilience',
        requirement: { type: 'comeback', value: 1 }
      }
    ];
  }

  loadUserAchievements() {
    const saved = localStorage.getItem('waec_achievements_v1');
    return saved ? JSON.parse(saved) : {
      unlocked: [],
      progress: {},
      stats: {
        quizzes_completed: 0,
        perfect_scores: 0,
        max_streak: 0,
        fast_answers: 0,
        correct_answers: 0,
        total_practice_days: 0,
        subject_mastery: {},
        topics_tried: new Set(),
        late_night_quizzes: 0,
        early_morning_quizzes: 0,
        score_improvements: {}
      }
    };
  }

  saveUserAchievements() {
    // Convert Set to Array for JSON serialization
    const toSave = { ...this.userAchievements };
    if (toSave.stats.topics_tried instanceof Set) {
      toSave.stats.topics_tried = Array.from(toSave.stats.topics_tried);
    }
    localStorage.setItem('waec_achievements_v1', JSON.stringify(toSave));
  }

  // Update achievements based on session data
  updateAchievements(sessionData) {
    const { subject, score, total, answers, times, topics, timestamp } = sessionData;
    const accuracy = score / total;
    
    // Update stats
    this.userAchievements.stats.quizzes_completed++;
    this.userAchievements.stats.correct_answers += score;
    
    // Perfect score
    if (accuracy === 1) {
      this.userAchievements.stats.perfect_scores++;
    }
    
    // Fast answers
    const fastAnswers = times.filter(t => t < 5).length;
    this.userAchievements.stats.fast_answers += fastAnswers;
    
    // Subject mastery
    if (!this.userAchievements.stats.subject_mastery[subject]) {
      this.userAchievements.stats.subject_mastery[subject] = [];
    }
    this.userAchievements.stats.subject_mastery[subject].push(accuracy);
    
    // Topics tried
    if (!(this.userAchievements.stats.topics_tried instanceof Set)) {
      this.userAchievements.stats.topics_tried = new Set(this.userAchievements.stats.topics_tried || []);
    }
    topics.forEach(topic => this.userAchievements.stats.topics_tried.add(topic));
    
    // Time-based achievements
    const hour = new Date(timestamp).getHours();
    if (hour >= 22 || hour < 6) {
      this.userAchievements.stats.late_night_quizzes++;
    }
    if (hour >= 5 && hour < 8) {
      this.userAchievements.stats.early_morning_quizzes++;
    }
    
    // Score improvement tracking
    if (!this.userAchievements.stats.score_improvements[subject]) {
      this.userAchievements.stats.score_improvements[subject] = [];
    }
    this.userAchievements.stats.score_improvements[subject].push(accuracy);
    
    // Check for achievements
    this.checkAchievements();
    this.saveUserAchievements();
  }

  updateStreak(currentStreak) {
    this.userAchievements.stats.max_streak = Math.max(
      this.userAchievements.stats.max_streak,
      currentStreak
    );
    this.checkAchievements();
    this.saveUserAchievements();
  }

  updatePracticeDays(totalDays) {
    this.userAchievements.stats.total_practice_days = totalDays;
    this.checkAchievements();
    this.saveUserAchievements();
  }

  checkAchievements() {
    const newAchievements = [];
    
    for (const achievement of this.achievements) {
      if (this.userAchievements.unlocked.includes(achievement.id)) {
        continue; // Already unlocked
      }
      
      if (this.isAchievementMet(achievement)) {
        this.userAchievements.unlocked.push(achievement.id);
        newAchievements.push(achievement);
        
        // Trigger notification
        if (this.onAchievementUnlocked) {
          this.onAchievementUnlocked(achievement);
        }
      }
    }
    
    return newAchievements;
  }

  isAchievementMet(achievement) {
    const { requirement } = achievement;
    const stats = this.userAchievements.stats;
    
    switch (requirement.type) {
      case 'quizzes_completed':
        return stats.quizzes_completed >= requirement.value;
      
      case 'perfect_scores':
        return stats.perfect_scores >= requirement.value;
      
      case 'max_streak':
        return stats.max_streak >= requirement.value;
      
      case 'fast_answers':
        return stats.fast_answers >= requirement.value;
      
      case 'correct_answers':
        return stats.correct_answers >= requirement.value;
      
      case 'total_practice_days':
        return stats.total_practice_days >= requirement.value;
      
      case 'subject_mastery':
        const subjectScores = stats.subject_mastery[requirement.subject] || [];
        const highScores = subjectScores.filter(score => score >= 0.9);
        return highScores.length >= requirement.value;
      
      case 'multi_subject':
        return requirement.subjects.every(subject => {
          const scores = stats.subject_mastery[subject] || [];
          return scores.some(score => score >= requirement.value / 100);
        });
      
      case 'topics_tried':
        const topicsSet = stats.topics_tried instanceof Set ? 
          stats.topics_tried : new Set(stats.topics_tried || []);
        return requirement.value === 'all' ? topicsSet.size >= 15 : topicsSet.size >= requirement.value;
      
      case 'late_night_quizzes':
        return stats.late_night_quizzes >= requirement.value;
      
      case 'early_morning_quizzes':
        return stats.early_morning_quizzes >= requirement.value;
      
      case 'long_session':
        return stats.quizzes_completed > 0; // Will be checked in session data
      
      case 'score_improvement':
        for (const subject in stats.score_improvements) {
          const scores = stats.score_improvements[subject];
          if (scores.length >= 2) {
            const improvement = ((scores[scores.length - 1] - scores[0]) * 100);
            if (improvement >= requirement.value) {
              return true;
            }
          }
        }
        return false;
      
      default:
        return false;
    }
  }

  getAchievementProgress(achievementId) {
    const achievement = this.achievements.find(a => a.id === achievementId);
    if (!achievement) return 0;
    
    if (this.userAchievements.unlocked.includes(achievementId)) {
      return 100;
    }
    
    const { requirement } = achievement;
    const stats = this.userAchievements.stats;
    
    switch (requirement.type) {
      case 'quizzes_completed':
        return Math.min(100, (stats.quizzes_completed / requirement.value) * 100);
      
      case 'perfect_scores':
        return Math.min(100, (stats.perfect_scores / requirement.value) * 100);
      
      case 'max_streak':
        return Math.min(100, (stats.max_streak / requirement.value) * 100);
      
      case 'correct_answers':
        return Math.min(100, (stats.correct_answers / requirement.value) * 100);
      
      default:
        return 0;
    }
  }

  getUnlockedAchievements() {
    return this.achievements.filter(a => this.userAchievements.unlocked.includes(a.id));
  }

  getLockedAchievements() {
    return this.achievements.filter(a => !this.userAchievements.unlocked.includes(a.id));
  }

  getTotalPoints() {
    return this.userAchievements.unlocked.length * 100; // 100 points per achievement
  }

  getAchievementsByCategory(category) {
    return this.achievements.filter(a => a.category === category);
  }

  // Get user's rank based on achievements
  getUserRank() {
    const points = this.getTotalPoints();
    
    if (points >= 1500) return { rank: 'Master', icon: '👑' };
    if (points >= 1000) return { rank: 'Expert', icon: '🏆' };
    if (points >= 700) return { rank: 'Advanced', icon: '🥇' };
    if (points >= 400) return { rank: 'Intermediate', icon: '🥈' };
    if (points >= 200) return { rank: 'Beginner', icon: '🥉' };
    return { rank: 'Novice', icon: '🌱' };
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AchievementSystem;
} else {
  window.AchievementSystem = AchievementSystem;
}