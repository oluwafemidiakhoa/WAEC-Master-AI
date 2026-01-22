// Advanced Analytics and Data Visualization Engine
class AnalyticsEngine {
  constructor() {
    this.data = this.loadAnalyticsData();
    this.chartInstances = new Map();
  }

  loadAnalyticsData() {
    const saved = localStorage.getItem('waec_analytics_v1');
    return saved ? JSON.parse(saved) : {
      sessions: [],
      performanceHistory: {},
      timeAnalysis: {
        averageSessionLength: [],
        averageQuestionTime: [],
        peakPerformanceHours: {}
      },
      topicMastery: {},
      streakHistory: [],
      goalProgress: [],
      insights: []
    };
  }

  saveAnalyticsData() {
    localStorage.setItem('waec_analytics_v1', JSON.stringify(this.data));
  }

  // Record a new session
  recordSession(sessionData) {
    const session = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      subject: sessionData.subject,
      mode: sessionData.mode,
      questionsAnswered: sessionData.total,
      correctAnswers: sessionData.score,
      accuracy: sessionData.score / sessionData.total,
      totalTime: sessionData.totalTime || 0,
      averageTimePerQuestion: sessionData.averageTime || 0,
      topics: sessionData.topics || [],
      difficulty: sessionData.difficulty || 'medium'
    };

    this.data.sessions.push(session);

    // Update performance history
    this.updatePerformanceHistory(session);
    
    // Update time analysis
    this.updateTimeAnalysis(session);
    
    // Update topic mastery
    this.updateTopicMastery(session, sessionData.questionDetails || []);
    
    // Generate insights
    this.generateInsights();
    
    this.saveAnalyticsData();
    
    return session;
  }

  updatePerformanceHistory(session) {
    const subject = session.subject;
    if (!this.data.performanceHistory[subject]) {
      this.data.performanceHistory[subject] = [];
    }
    
    this.data.performanceHistory[subject].push({
      date: session.timestamp,
      accuracy: session.accuracy,
      score: session.correctAnswers,
      total: session.questionsAnswered
    });

    // Keep only last 50 sessions per subject
    if (this.data.performanceHistory[subject].length > 50) {
      this.data.performanceHistory[subject].shift();
    }
  }

  updateTimeAnalysis(session) {
    const hour = new Date(session.timestamp).getHours();
    
    // Track performance by hour
    if (!this.data.timeAnalysis.peakPerformanceHours[hour]) {
      this.data.timeAnalysis.peakPerformanceHours[hour] = {
        sessions: 0,
        totalAccuracy: 0,
        averageAccuracy: 0
      };
    }
    
    const hourData = this.data.timeAnalysis.peakPerformanceHours[hour];
    hourData.sessions++;
    hourData.totalAccuracy += session.accuracy;
    hourData.averageAccuracy = hourData.totalAccuracy / hourData.sessions;

    // Track session length trends
    this.data.timeAnalysis.averageSessionLength.push({
      date: session.timestamp,
      length: session.totalTime
    });

    // Track question time trends
    this.data.timeAnalysis.averageQuestionTime.push({
      date: session.timestamp,
      time: session.averageTimePerQuestion
    });
  }

  updateTopicMastery(session, questionDetails) {
    const subject = session.subject;
    
    if (!this.data.topicMastery[subject]) {
      this.data.topicMastery[subject] = {};
    }

    // Group questions by topic
    const topicPerformance = {};
    questionDetails.forEach(q => {
      if (!topicPerformance[q.topic]) {
        topicPerformance[q.topic] = { correct: 0, total: 0 };
      }
      topicPerformance[q.topic].total++;
      if (q.correct) {
        topicPerformance[q.topic].correct++;
      }
    });

    // Update mastery data
    Object.entries(topicPerformance).forEach(([topic, performance]) => {
      if (!this.data.topicMastery[subject][topic]) {
        this.data.topicMastery[subject][topic] = {
          history: [],
          currentMastery: 0,
          totalAttempts: 0,
          totalCorrect: 0
        };
      }

      const topicData = this.data.topicMastery[subject][topic];
      topicData.totalAttempts += performance.total;
      topicData.totalCorrect += performance.correct;
      topicData.currentMastery = topicData.totalCorrect / topicData.totalAttempts;

      topicData.history.push({
        date: session.timestamp,
        accuracy: performance.correct / performance.total,
        attempts: performance.total
      });

      // Keep only last 20 sessions per topic
      if (topicData.history.length > 20) {
        topicData.history.shift();
      }
    });
  }

  generateInsights() {
    const insights = [];
    const recentSessions = this.data.sessions.slice(-10);
    
    if (recentSessions.length === 0) return;

    // Performance trend insight
    const performanceTrend = this.calculatePerformanceTrend(recentSessions);
    if (performanceTrend.direction !== 'stable') {
      insights.push({
        type: performanceTrend.direction === 'improving' ? 'positive' : 'warning',
        title: `Performance ${performanceTrend.direction}`,
        description: `Your accuracy has ${performanceTrend.direction} by ${Math.round(performanceTrend.change * 100)}% over recent sessions`,
        action: performanceTrend.direction === 'declining' ? 'review_basics' : 'continue_current_approach'
      });
    }

    // Peak performance time insight
    const peakHour = this.findPeakPerformanceHour();
    if (peakHour) {
      insights.push({
        type: 'info',
        title: 'Optimal Study Time',
        description: `You perform best at ${this.formatHour(peakHour.hour)} with ${Math.round(peakHour.accuracy * 100)}% average accuracy`,
        action: 'schedule_practice'
      });
    }

    // Weak topic insight
    const weakTopics = this.findWeakTopics();
    if (weakTopics.length > 0) {
      insights.push({
        type: 'suggestion',
        title: 'Focus Areas',
        description: `Consider more practice in: ${weakTopics.slice(0, 3).join(', ')}`,
        action: 'targeted_practice'
      });
    }

    // Speed insight
    const speedAnalysis = this.analyzeSpeed(recentSessions);
    if (speedAnalysis.suggestion) {
      insights.push({
        type: 'info',
        title: 'Speed Analysis',
        description: speedAnalysis.description,
        action: speedAnalysis.action
      });
    }

    this.data.insights = insights;
  }

  calculatePerformanceTrend(sessions) {
    if (sessions.length < 3) return { direction: 'stable', change: 0 };

    const firstHalf = sessions.slice(0, Math.floor(sessions.length / 2));
    const secondHalf = sessions.slice(Math.floor(sessions.length / 2));

    const firstAvg = firstHalf.reduce((sum, s) => sum + s.accuracy, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, s) => sum + s.accuracy, 0) / secondHalf.length;

    const change = secondAvg - firstAvg;
    
    if (Math.abs(change) < 0.05) return { direction: 'stable', change: 0 };
    
    return {
      direction: change > 0 ? 'improving' : 'declining',
      change: Math.abs(change)
    };
  }

  findPeakPerformanceHour() {
    const hours = this.data.timeAnalysis.peakPerformanceHours;
    let bestHour = null;
    let bestAccuracy = 0;

    Object.entries(hours).forEach(([hour, data]) => {
      if (data.sessions >= 3 && data.averageAccuracy > bestAccuracy) {
        bestAccuracy = data.averageAccuracy;
        bestHour = { hour: parseInt(hour), accuracy: data.averageAccuracy };
      }
    });

    return bestHour;
  }

  findWeakTopics() {
    const weakTopics = [];

    Object.values(this.data.topicMastery).forEach(subjectTopics => {
      Object.entries(subjectTopics).forEach(([topic, data]) => {
        if (data.totalAttempts >= 5 && data.currentMastery < 0.7) {
          weakTopics.push(topic);
        }
      });
    });

    return weakTopics;
  }

  analyzeSpeed(sessions) {
    const avgTime = sessions.reduce((sum, s) => sum + s.averageTimePerQuestion, 0) / sessions.length;
    
    if (avgTime < 10) {
      return {
        suggestion: true,
        description: 'You answer very quickly. Consider taking more time to read carefully.',
        action: 'slow_down'
      };
    } else if (avgTime > 60) {
      return {
        suggestion: true,
        description: 'You take longer than average. Practice can help improve speed.',
        action: 'speed_practice'
      };
    }

    return { suggestion: false };
  }

  formatHour(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period}`;
  }

  // Chart generation methods
  generatePerformanceChart(canvas, subject = null) {
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart
    const existingChart = this.chartInstances.get(canvas.id);
    if (existingChart) {
      existingChart.destroy();
    }

    const data = subject ? 
      this.data.performanceHistory[subject] || [] :
      this.getAllPerformanceData();

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => new Date(d.date).toLocaleDateString()),
        datasets: [{
          label: 'Accuracy %',
          data: data.map(d => d.accuracy * 100),
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: subject ? `${subject} Performance Trend` : 'Overall Performance Trend'
          },
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });

    this.chartInstances.set(canvas.id, chart);
    return chart;
  }

  generateTimeChart(canvas) {
    const ctx = canvas.getContext('2d');
    
    const existingChart = this.chartInstances.get(canvas.id);
    if (existingChart) {
      existingChart.destroy();
    }

    const hourData = this.data.timeAnalysis.peakPerformanceHours;
    const hours = Array.from({length: 24}, (_, i) => i);
    const accuracies = hours.map(hour => 
      hourData[hour] ? hourData[hour].averageAccuracy * 100 : 0
    );

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: hours.map(h => this.formatHour(h)),
        datasets: [{
          label: 'Average Accuracy %',
          data: accuracies,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Performance by Time of Day'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });

    this.chartInstances.set(canvas.id, chart);
    return chart;
  }

  getAllPerformanceData() {
    const allData = [];
    Object.values(this.data.performanceHistory).forEach(subjectData => {
      allData.push(...subjectData);
    });
    
    // Sort by date and group by date
    allData.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const groupedByDate = {};
    allData.forEach(session => {
      const date = new Date(session.date).toDateString();
      if (!groupedByDate[date]) {
        groupedByDate[date] = { totalCorrect: 0, totalQuestions: 0, date: session.date };
      }
      groupedByDate[date].totalCorrect += session.score;
      groupedByDate[date].totalQuestions += session.total;
    });

    return Object.values(groupedByDate).map(day => ({
      date: day.date,
      accuracy: day.totalCorrect / day.totalQuestions
    }));
  }

  // Export methods
  exportData() {
    return {
      exportDate: new Date().toISOString(),
      data: this.data,
      summary: this.generateSummaryReport()
    };
  }

  generateSummaryReport() {
    const totalSessions = this.data.sessions.length;
    const totalQuestions = this.data.sessions.reduce((sum, s) => sum + s.questionsAnswered, 0);
    const totalCorrect = this.data.sessions.reduce((sum, s) => sum + s.correctAnswers, 0);
    const overallAccuracy = totalCorrect / totalQuestions || 0;

    const subjectPerformance = {};
    Object.entries(this.data.performanceHistory).forEach(([subject, sessions]) => {
      const subjectTotal = sessions.reduce((sum, s) => sum + s.total, 0);
      const subjectCorrect = sessions.reduce((sum, s) => sum + s.score, 0);
      subjectPerformance[subject] = {
        sessions: sessions.length,
        accuracy: subjectCorrect / subjectTotal || 0,
        questionsAnswered: subjectTotal
      };
    });

    return {
      totalSessions,
      totalQuestions,
      overallAccuracy: Math.round(overallAccuracy * 100) / 100,
      subjectPerformance,
      insights: this.data.insights,
      generatedAt: new Date().toISOString()
    };
  }

  // Cleanup method
  cleanup() {
    this.chartInstances.forEach(chart => chart.destroy());
    this.chartInstances.clear();
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AnalyticsEngine;
} else {
  window.AnalyticsEngine = AnalyticsEngine;
}