// Advanced WAEC Practice App - Main Application
(() => {
  // Enhanced application state
  const state = {
    // Core quiz state
    subject: 'mathematics',
    mode: 'practice',
    allQuestions: [],
    filteredQuestions: [],
    sessionQuestions: [],
    currentIndex: 0,
    score: 0,
    answers: [],
    timerId: null,
    timeLeft: 0,
    missedQuestions: [],
    reviewMode: false,
    autoAdvanceTimer: null,
    
    // Session tracking
    sessionStartTime: null,
    questionTimes: [],
    questionStartTime: null,
    sessionData: {},
    
    // Current theme
    theme: 'auto',
    
    // Voice state
    voiceEnabled: false,
    
    // Analytics state
    showingAnalytics: false,
    showingAchievements: false,
    showingSocial: false
  };

  // Core engines and systems
  let aiEngine;
  let achievementSystem;
  let voiceEngine;
  let analyticsEngine;
  let deferredInstallPrompt = null;

  // DOM elements cache
  const els = {
    // Original elements
    subjectSelect: document.getElementById('subjectSelect'),
    modeSelect: document.getElementById('modeSelect'),
    topicSelect: document.getElementById('topicSelect'),
    questionCount: document.getElementById('questionCount'),
    timeLimit: document.getElementById('timeLimit'),
    timeWrap: document.getElementById('timeWrap'),
    startBtn: document.getElementById('startBtn'),
    setupNote: document.getElementById('setupNote'),
    autoAdvance: document.getElementById('autoAdvance'),
    quickButtons: Array.from(document.querySelectorAll('[data-quick]')),
    onlineStatus: document.getElementById('onlineStatus'),
    statusText: document.getElementById('statusText'),
    statusPill: document.getElementById('statusPill'),
    streakStat: document.getElementById('streakStat'),
    goalStat: document.getElementById('goalStat'),
    dailyGoalInput: document.getElementById('dailyGoalInput'),
    quiz: document.getElementById('quiz'),
    setup: document.getElementById('setup'),
    summary: document.getElementById('summary'),
    questionText: document.getElementById('questionText'),
    options: document.getElementById('options'),
    progressText: document.getElementById('progressText'),
    progressBar: document.getElementById('progressBar'),
    timer: document.getElementById('timer'),
    topicBadge: document.getElementById('topicBadge'),
    explanation: document.getElementById('explanation'),
    explanationText: document.getElementById('explanationText'),
    answerFeedback: document.getElementById('answerFeedback'),
    nextBtn: document.getElementById('nextBtn'),
    finishBtn: document.getElementById('finishBtn'),
    scoreSummary: document.getElementById('scoreSummary'),
    weakTopics: document.getElementById('weakTopics'),
    history: document.getElementById('history'),
    topicBreakdown: document.getElementById('topicBreakdown'),
    streakSummary: document.getElementById('streakSummary'),
    goalSummary: document.getElementById('goalSummary'),
    reviewActions: document.getElementById('reviewActions'),
    reviewBtn: document.getElementById('reviewBtn'),
    missedList: document.getElementById('missedList'),
    dashboardContent: document.getElementById('dashboardContent'),
    restartBtn: document.getElementById('restartBtn'),
    installBtn: document.getElementById('installBtn'),

    // New advanced elements
    themeToggle: document.getElementById('themeToggle'),
    voiceToggle: document.getElementById('voiceToggle'),
    helpBtn: document.getElementById('helpBtn'),
    achievementToast: document.getElementById('achievementToast'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    analyticsBtn: document.getElementById('analyticsBtn'),
    achievementsBtn: document.getElementById('achievementsBtn'),
    socialBtn: document.getElementById('socialBtn'),
    
    // Advanced sections
    analytics: document.getElementById('analytics'),
    achievements: document.getElementById('achievements'),
    social: document.getElementById('social'),
    closeAnalytics: document.getElementById('closeAnalytics'),
    closeAchievements: document.getElementById('closeAchievements'),
    closeSocial: document.getElementById('closeSocial'),
    
    // Analytics elements
    performanceChart: document.getElementById('performanceChart'),
    timeChart: document.getElementById('timeChart'),
    topicMastery: document.getElementById('topicMastery'),
    learningInsights: document.getElementById('learningInsights'),
    
    // Achievement elements
    achievementsList: document.getElementById('achievementsList'),
    
    // Social elements
    leaderboard: document.getElementById('leaderboard'),
    challenges: document.getElementById('challenges'),
    groups: document.getElementById('groups'),
    tabButtons: Array.from(document.querySelectorAll('.tab-btn'))
  };

  // Storage keys
  const STORAGE_KEY = 'waec_stats_v2';
  const LAST_SUMMARY_KEY = 'waec_last_summary_v2';
  const THEME_KEY = 'waec_theme_v1';

  // Initialize core systems with fallback
  async function initializeSystems() {
    showLoading('Initializing advanced features...');
    
    try {
      // Initialize AI engine with fallback
      try {
        aiEngine = new AdaptiveLearningEngine();
      } catch (error) {
        console.warn('AI Engine failed to load:', error);
        aiEngine = null;
      }
      
      // Initialize achievement system with fallback
      try {
        achievementSystem = new AchievementSystem();
        achievementSystem.onAchievementUnlocked = showAchievementToast;
      } catch (error) {
        console.warn('Achievement System failed to load:', error);
        achievementSystem = null;
      }
      
      // Initialize voice engine with fallback
      try {
        voiceEngine = new VoiceEngine();
        await voiceEngine.init();
        state.voiceEnabled = voiceEngine.isEnabled;
        updateVoiceToggle();
      } catch (error) {
        console.warn('Voice Engine failed to load:', error);
        voiceEngine = null;
        state.voiceEnabled = false;
      }
      
      // Initialize analytics engine with fallback
      try {
        analyticsEngine = new AnalyticsEngine();
      } catch (error) {
        console.warn('Analytics Engine failed to load:', error);
        analyticsEngine = null;
      }
      
      console.log('Core systems initialized successfully');
      hideLoading();
    } catch (error) {
      console.error('Critical error initializing systems:', error);
      hideLoading();
      // Continue with basic functionality
    }
  }

  // Utility functions
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const shuffle = (array) => {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const formatSubjectName = (subject) => {
    if (!subject) return '';
    return subject.charAt(0).toUpperCase() + subject.slice(1);
  };

  const getLocalDateString = (date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getYesterdayString = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return getLocalDateString(date);
  };

  // Theme management
  function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    state.theme = savedTheme || 'auto';
    applyTheme(state.theme);
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme'); // Use system preference
    }
    
    updateThemeToggle(theme);
  }

  function toggleTheme() {
    const themes = ['auto', 'light', 'dark'];
    const currentIndex = themes.indexOf(state.theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    state.theme = nextTheme;
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
    
    // Announce theme change
    if (voiceEngine && voiceEngine.isEnabled) {
      const themeNames = {
        auto: 'automatic',
        light: 'light mode',
        dark: 'dark mode'
      };
      voiceEngine.speak(`Theme changed to ${themeNames[nextTheme]}`);
    }
  }

  function updateThemeToggle(theme = state.theme) {
    if (!els.themeToggle) return;
    
    const lightIcon = els.themeToggle.querySelector('.theme-icon--light');
    const darkIcon = els.themeToggle.querySelector('.theme-icon--dark');
    
    // Update tooltip
    els.themeToggle.title = `Current: ${theme} theme`;
  }

  function updateVoiceToggle() {
    if (!els.voiceToggle) return;
    
    els.voiceToggle.classList.toggle('active', state.voiceEnabled);
    els.voiceToggle.title = `Voice narration: ${state.voiceEnabled ? 'On' : 'Off'}`;
  }

  // Loading overlay functions
  function showLoading(message = 'Loading...') {
    if (els.loadingOverlay) {
      els.loadingOverlay.querySelector('.loading-text').textContent = message;
      els.loadingOverlay.classList.remove('hidden');
    }
  }

  function hideLoading() {
    if (els.loadingOverlay) {
      els.loadingOverlay.classList.add('hidden');
    }
  }

  // Achievement toast
  function showAchievementToast(achievement) {
    if (!els.achievementToast) return;
    
    const iconEl = els.achievementToast.querySelector('.achievement-icon');
    const titleEl = els.achievementToast.querySelector('.achievement-title');
    const descEl = els.achievementToast.querySelector('.achievement-description');
    
    iconEl.textContent = achievement.icon;
    titleEl.textContent = achievement.name;
    descEl.textContent = achievement.description;
    
    els.achievementToast.classList.remove('hidden');
    
    // Auto hide after 4 seconds
    setTimeout(() => {
      els.achievementToast.classList.add('hidden');
    }, 4000);
    
    // Voice announcement
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.announceAchievement(achievement);
    }
    
    // Add visual effect to achievements button
    if (els.achievementsBtn) {
      els.achievementsBtn.classList.add('animate-pulse');
      setTimeout(() => {
        els.achievementsBtn.classList.remove('animate-pulse');
      }, 2000);
    }
  }

  // Statistics functions (enhanced)
  const getStats = () => {
    try {
      const stats = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      if (!stats._meta) {
        stats._meta = {
          streak: 0,
          lastPracticeDate: null,
          dailyGoal: 20,
          dailyAnswered: 0,
          dailyDate: null,
          totalSessions: 0,
          totalQuestions: 0,
          totalCorrect: 0
        };
      }
      const today = getLocalDateString();
      if (stats._meta.dailyDate !== today) {
        stats._meta.dailyDate = today;
        stats._meta.dailyAnswered = 0;
      }
      return stats;
    } catch (error) {
      return {
        _meta: {
          streak: 0,
          lastPracticeDate: null,
          dailyGoal: 20,
          dailyAnswered: 0,
          dailyDate: null,
          totalSessions: 0,
          totalQuestions: 0,
          totalCorrect: 0
        }
      };
    }
  };

  const saveStats = (stats) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  };

  // Enhanced question loading with AI recommendations
  const loadSubject = async (subject) => {
    state.subject = subject;
    showLoading(`Loading ${formatSubjectName(subject)} questions...`);
    
    try {
      const response = await fetch(`./data/${subject}.json`);
      if (!response.ok) {
        throw new Error('Failed to load questions.');
      }
      const questions = await response.json();
      
      // Use AI engine for question recommendations if available
      try {
        if (aiEngine && aiEngine.recommendQuestions) {
          state.allQuestions = aiEngine.recommendQuestions(questions, subject, questions.length);
        } else {
          state.allQuestions = questions;
        }
      } catch (error) {
        console.warn('AI recommendation failed, using default questions:', error);
        state.allQuestions = questions;
      }
      
      setTopics(state.allQuestions);
      applyTopicFilter();
      hideLoading();
      
      // Voice announcement
      if (voiceEngine && voiceEngine.isEnabled) {
        voiceEngine.speak(`${formatSubjectName(subject)} questions loaded`);
      }
      
    } catch (error) {
      state.allQuestions = [];
      state.filteredQuestions = [];
      els.topicSelect.innerHTML = '<option value=\"all\">All topics</option>';
      els.questionText.textContent = 'Unable to load questions.';
      if (els.setupNote) {
        els.setupNote.textContent = 'Unable to load questions for this subject.';
      }
      els.startBtn.disabled = true;
      hideLoading();
      
      console.error('Error loading questions:', error);
    }
  };

  // Enhanced quiz functions
  const startQuiz = () => {
    applyTopicFilter();
    if (!state.filteredQuestions.length) {
      return;
    }
    
    state.reviewMode = false;
    state.missedQuestions = [];
    state.sessionStartTime = Date.now();
    state.questionTimes = [];
    
    const totalRequested = Number(els.questionCount.value) || 20;
    const shuffled = shuffle(state.filteredQuestions);
    state.sessionQuestions = shuffled.slice(0, Math.max(1, totalRequested));
    state.currentIndex = 0;
    state.score = 0;
    state.answers = [];

    // Create session data for tracking
    state.sessionData = {
      subject: state.subject,
      mode: state.mode,
      startTime: state.sessionStartTime,
      questions: state.sessionQuestions,
      totalQuestions: state.sessionQuestions.length
    };

    setVisibility(true, false);
    startTimer();
    renderQuestion();
    
    // Voice announcement
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.announceNavigation('quiz');
      setTimeout(() => {
        voiceEngine.speak(`Starting ${state.mode} mode with ${state.sessionQuestions.length} questions`);
      }, 1000);
    }
  };

  const renderQuestion = () => {
    const current = state.sessionQuestions[state.currentIndex];
    if (!current) {
      finishQuiz();
      return;
    }

    // Record question start time
    state.questionStartTime = Date.now();

    updateProgress();
    els.questionText.textContent = current.question;
    if (els.topicBadge) {
      els.topicBadge.textContent = current.topic;
    }
    if (els.nextBtn) {
      const isLast = state.currentIndex >= state.sessionQuestions.length - 1;
      els.nextBtn.textContent = isLast ? 'Finish' : 'Next';
    }
    els.options.innerHTML = '';
    els.explanation.classList.add('hidden');

    const answered = typeof state.answers[state.currentIndex] === 'number';

    const fragment = document.createDocumentFragment();
    current.options.forEach((optionText, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.textContent = optionText;
      btn.dataset.index = String(index);
      btn.dataset.letter = String.fromCharCode(65 + index); // A, B, C, D
      btn.disabled = answered;

      if (answered) {
        const chosen = state.answers[state.currentIndex];
        if (index === current.answer) {
          btn.classList.add('correct');
        }
        if (index === chosen && chosen !== current.answer) {
          btn.classList.add('incorrect');
        }
      }

      fragment.appendChild(btn);
    });
    els.options.appendChild(fragment);

    if (answered) {
      showExplanation(current, state.answers[state.currentIndex]);
    } else {
      // Voice narration for new question
      if (voiceEngine && voiceEngine.isEnabled) {
        setTimeout(() => {
          voiceEngine.speakQuestion(current.question, {
            questionNumber: state.currentIndex + 1
          });
          
          setTimeout(() => {
            voiceEngine.speakOptions(current.options);
          }, 2000);
        }, 500);
      }
    }

    // Add entrance animation
    els.quiz.classList.add('animate-fade-in');
  };

  const handleAnswer = (index) => {
    if (typeof state.answers[state.currentIndex] === 'number') {
      return;
    }

    // Record answer time
    const answerTime = (Date.now() - state.questionStartTime) / 1000;
    state.questionTimes.push(answerTime);

    state.answers[state.currentIndex] = index;
    const current = state.sessionQuestions[state.currentIndex];
    const isCorrect = index === current.answer;
    
    if (isCorrect) {
      state.score += 1;
    }
    
    renderQuestion();
    
    // Voice feedback
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.speakFeedback(isCorrect, current.explanation);
    }
    
    // Visual feedback
    if (isCorrect) {
      els.options.children[index].classList.add('animate-pulse');
    } else {
      els.options.children[index].classList.add('animate-shake');
    }
    
    scheduleAutoAdvance();
  };

  const finishQuiz = () => {
    clearInterval(state.timerId);
    state.timerId = null;
    clearTimeout(state.autoAdvanceTimer);

    const endTime = Date.now();
    const totalTime = (endTime - state.sessionStartTime) / 1000;
    const total = state.sessionQuestions.length;
    const percent = total === 0 ? 0 : Math.round((state.score / total) * 100);

    // Collect detailed session data
    const sessionData = {
      subject: state.subject,
      mode: state.mode,
      total,
      score: state.score,
      totalTime,
      averageTime: state.questionTimes.length > 0 ? 
        state.questionTimes.reduce((a, b) => a + b, 0) / state.questionTimes.length : 0,
      times: state.questionTimes,
      topics: Array.from(new Set(state.sessionQuestions.map(q => q.topic))),
      questionDetails: state.sessionQuestions.map((q, i) => ({
        topic: q.topic,
        correct: state.answers[i] === q.answer,
        timeSpent: state.questionTimes[i] || 0
      })),
      timestamp: Date.now()
    };

    // Process with AI engine
    let insights = [];
    try {
      if (aiEngine && aiEngine.analyzePerformance) {
        insights = aiEngine.analyzePerformance(sessionData);
      }
    } catch (error) {
      console.warn('AI analysis failed:', error);
    }

    // Record analytics
    try {
      if (analyticsEngine && analyticsEngine.recordSession) {
        analyticsEngine.recordSession(sessionData);
      }
    } catch (error) {
      console.warn('Analytics recording failed:', error);
    }

    // Update achievements
    try {
      if (achievementSystem && achievementSystem.updateAchievements) {
        achievementSystem.updateAchievements(sessionData);
      }
    } catch (error) {
      console.warn('Achievement update failed:', error);
    }

    // Calculate topic statistics
    const topicStats = {};
    state.sessionQuestions.forEach((question, index) => {
      const chosen = state.answers[index];
      const entry = topicStats[question.topic] || { correct: 0, total: 0 };
      entry.total += 1;
      if (chosen === question.answer) {
        entry.correct += 1;
      }
      topicStats[question.topic] = entry;
    });

    const weakTopics = computeWeakTopics(topicStats);
    const missed = state.sessionQuestions.filter((question, index) => state.answers[index] !== question.answer);
    state.missedQuestions = missed;

    // Update traditional stats
    const stats = getStats();
    const shouldRecord = !state.reviewMode;

    if (shouldRecord) {
      const meta = stats._meta;
      const today = getLocalDateString();
      const yesterday = getYesterdayString();

      if (meta.dailyDate !== today) {
        meta.dailyDate = today;
        meta.dailyAnswered = 0;
      }
      meta.dailyAnswered += total;
      meta.totalSessions += 1;
      meta.totalQuestions += total;
      meta.totalCorrect += state.score;

      if (meta.lastPracticeDate !== today) {
        if (meta.lastPracticeDate === yesterday) {
          meta.streak += 1;
        } else {
          meta.streak = 1;
        }
        meta.lastPracticeDate = today;
      }

      if (!stats[state.subject]) {
        stats[state.subject] = { attempts: 0, correct: 0, topics: {} };
      }
      const subjectStats = stats[state.subject];
      subjectStats.attempts += total;
      subjectStats.correct += state.score;

      Object.entries(topicStats).forEach(([topic, values]) => {
        if (!subjectStats.topics[topic]) {
          subjectStats.topics[topic] = { correct: 0, total: 0 };
        }
        subjectStats.topics[topic].correct += values.correct;
        subjectStats.topics[topic].total += values.total;
      });

      saveStats(stats);
      
      // Update achievement system with new streak
      if (achievementSystem) {
        achievementSystem.updateStreak(meta.streak);
      }
      
      saveLastSummary({
        subject: state.subject,
        score: state.score,
        total,
        percent,
        weakTopics,
        insights
      });
    }

    renderSummary(stats, weakTopics, percent, total, topicStats, missed, insights);
    setVisibility(false, true);
    renderHeaderStats(stats);
    renderDashboard(stats);

    // Voice summary
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.speakSummary(state.score, total, percent);
    }

    // Add completion animation
    els.summary.classList.add('animate-fade-in');
  };

  // Enhanced rendering functions
  const renderSummary = (stats, weakTopics, percent, total, topicStats, missed, insights = []) => {
    const label = state.reviewMode ? 'Review score' : 'Score';
    els.scoreSummary.textContent = `${label}: ${state.score} / ${total} (${percent}%)`;

    // Add score color coding
    if (percent >= 90) {
      els.scoreSummary.style.color = 'var(--success)';
    } else if (percent >= 70) {
      els.scoreSummary.style.color = 'var(--info)';
    } else if (percent >= 50) {
      els.scoreSummary.style.color = 'var(--warning)';
    } else {
      els.scoreSummary.style.color = 'var(--danger)';
    }

    if (weakTopics.length) {
      const items = weakTopics
        .map((item) => `${item.topic} (${Math.round(item.accuracy * 100)}%)`)
        .join(', ');
      els.weakTopics.textContent = `Weak topics to revisit: ${items}`;
    } else {
      els.weakTopics.textContent = 'Weak topics: keep practicing to build data.';
    }

    const subjectStats = stats[state.subject];
    if (subjectStats) {
      const overall = subjectStats.attempts === 0
        ? 0
        : Math.round((subjectStats.correct / subjectStats.attempts) * 100);
      els.history.textContent = `All-time for ${state.subject}: ${subjectStats.correct}/${subjectStats.attempts} (${overall}%).`;
    } else {
      els.history.textContent = '';
    }

    // Enhanced topic breakdown with visual bars
    if (els.topicBreakdown) {
      els.topicBreakdown.innerHTML = '';
      const entries = Object.entries(topicStats);
      entries.sort((a, b) => a[0].localeCompare(b[0]));
      entries.forEach(([topic, values]) => {
        const accuracy = values.total === 0 ? 0 : Math.round((values.correct / values.total) * 100);
        const row = document.createElement('div');
        row.className = 'topic-row animate-slide-in-left';

        const header = document.createElement('div');
        header.className = 'topic-row__header';
        header.innerHTML = `<span>${topic}</span><span>${accuracy}%</span>`;

        const bar = document.createElement('div');
        bar.className = 'topic-row__bar';
        const fill = document.createElement('div');
        fill.className = 'topic-row__fill';
        fill.style.width = `${accuracy}%`;
        fill.style.backgroundColor = accuracy >= 80 ? 'var(--success)' : 
                                   accuracy >= 60 ? 'var(--warning)' : 'var(--danger)';
        bar.appendChild(fill);

        row.appendChild(header);
        row.appendChild(bar);
        els.topicBreakdown.appendChild(row);
      });
    }

    // Display AI insights if available
    if (insights.length > 0 && els.learningInsights) {
      renderInsights(insights);
    }

    const meta = stats._meta || {};
    if (els.streakSummary) {
      const streakText = meta.streak ? `${meta.streak} day${meta.streak === 1 ? '' : 's'}` : '0 days';
      els.streakSummary.textContent = `Streak: ${streakText}.`;
    }
    if (els.goalSummary) {
      const goal = meta.dailyGoal || 20;
      const done = meta.dailyAnswered || 0;
      els.goalSummary.textContent = `Daily goal: ${done} / ${goal} questions today.`;
    }

    if (els.reviewActions) {
      const showReview = !state.reviewMode && missed.length > 0;
      els.reviewActions.classList.toggle('hidden', !showReview);
    }
    
    if (els.missedList) {
      els.missedList.innerHTML = '';
      if (!missed.length) {
        els.missedList.textContent = state.reviewMode
          ? 'No missed questions in review.'
          : 'No missed questions. Great work!';
      } else {
        const fragment = document.createDocumentFragment();
        missed.forEach((question) => {
          const card = document.createElement('div');
          card.className = 'missed-card animate-fade-in';
          const title = document.createElement('div');
          title.className = 'missed-card__title';
          title.textContent = question.question;
          const answer = document.createElement('div');
          answer.className = 'muted small';
          answer.textContent = `Correct answer: ${question.options[question.answer]}`;
          const explanation = document.createElement('div');
          explanation.className = 'muted small';
          explanation.textContent = question.explanation;
          card.appendChild(title);
          card.appendChild(answer);
          card.appendChild(explanation);
          fragment.appendChild(card);
        });
        els.missedList.appendChild(fragment);
      }
    }
  };

  // New function to render AI insights
  function renderInsights(insights) {
    if (!els.learningInsights) return;
    
    els.learningInsights.innerHTML = '';
    insights.forEach(insight => {
      const item = document.createElement('div');
      item.className = `insight-item insight-item--${insight.type} animate-slide-in-right`;
      
      const icon = insight.type === 'success' ? '✅' :
                  insight.type === 'warning' ? '⚠️' :
                  insight.type === 'suggestion' ? '💡' : 'ℹ️';
      
      item.innerHTML = `
        <span class=\"insight-icon\">${icon}</span>
        <span class=\"insight-message\">${insight.message}</span>
      `;
      
      els.learningInsights.appendChild(item);
    });
  }

  // Enhanced analytics functions
  function showAnalytics() {
    if (!analyticsEngine) return;
    
    state.showingAnalytics = true;
    els.analytics.classList.remove('hidden');
    els.analytics.classList.add('animate-fade-in');
    
    // Hide other sections
    els.setup.classList.add('hidden');
    els.summary.classList.add('hidden');
    
    // Generate charts
    setTimeout(() => {
      if (els.performanceChart) {
        analyticsEngine.generatePerformanceChart(els.performanceChart);
      }
      if (els.timeChart) {
        analyticsEngine.generateTimeChart(els.timeChart);
      }
      renderTopicMastery();
      renderLearningInsights();
    }, 100);
    
    // Voice announcement
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.announceNavigation('analytics');
    }
  }

  function hideAnalytics() {
    state.showingAnalytics = false;
    els.analytics.classList.add('hidden');
    els.setup.classList.remove('hidden');
  }

  function renderTopicMastery() {
    if (!els.topicMastery || !analyticsEngine) return;
    
    const stats = getStats();
    els.topicMastery.innerHTML = '';
    
    Object.entries(stats).forEach(([subject, subjectData]) => {
      if (subject === '_meta') return;
      
      const topics = subjectData.topics || {};
      Object.entries(topics).forEach(([topic, topicData]) => {
        const mastery = topicData.total > 0 ? (topicData.correct / topicData.total) * 100 : 0;
        
        const item = document.createElement('div');
        item.className = 'mastery-item';
        item.innerHTML = `
          <div>
            <div class=\"mastery-topic\">${topic}</div>
            <div class=\"mastery-subject muted small\">${formatSubjectName(subject)}</div>
          </div>
          <div class=\"mastery-score\">${Math.round(mastery)}%</div>
          <div class=\"mastery-bar\">
            <div class=\"mastery-fill\" style=\"width: ${mastery}%\"></div>
          </div>
        `;
        
        els.topicMastery.appendChild(item);
      });
    });
  }

  function renderLearningInsights() {
    if (!els.learningInsights || !analyticsEngine) return;
    
    const insights = analyticsEngine.data.insights || [];
    els.learningInsights.innerHTML = '';
    
    if (insights.length === 0) {
      els.learningInsights.innerHTML = '<div class=\"insight-item\">Complete more quizzes to see personalized insights!</div>';
      return;
    }
    
    insights.forEach(insight => {
      const item = document.createElement('div');
      item.className = `insight-item insight-item--${insight.type}`;
      item.innerHTML = `
        <div class=\"insight-title\">${insight.title}</div>
        <div class=\"insight-description\">${insight.description}</div>
      `;
      els.learningInsights.appendChild(item);
    });
  }

  // Achievement functions
  function showAchievements() {
    if (!achievementSystem) return;
    
    state.showingAchievements = true;
    els.achievements.classList.remove('hidden');
    els.achievements.classList.add('animate-fade-in');
    
    // Hide other sections
    els.setup.classList.add('hidden');
    els.summary.classList.add('hidden');
    
    renderAchievements();
    
    // Voice announcement
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.announceNavigation('achievements');
    }
  }

  function hideAchievements() {
    state.showingAchievements = false;
    els.achievements.classList.add('hidden');
    els.setup.classList.remove('hidden');
  }

  function renderAchievements() {
    if (!els.achievementsList || !achievementSystem) return;
    
    els.achievementsList.innerHTML = '';
    
    const achievements = achievementSystem.achievements;
    const unlocked = achievementSystem.userAchievements.unlocked;
    
    achievements.forEach(achievement => {
      const isUnlocked = unlocked.includes(achievement.id);
      const progress = achievementSystem.getAchievementProgress(achievement.id);
      
      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''} animate-slide-in-right`;
      
      card.innerHTML = `
        <div class=\"achievement-badge\">${achievement.icon}</div>
        <div class=\"achievement-name\">${achievement.name}</div>
        <div class=\"achievement-description\">${achievement.description}</div>
        <div class=\"achievement-progress\">
          <div class=\"progress-bar\">
            <div class=\"progress-fill\" style=\"width: ${progress}%\"></div>
          </div>
          <div class=\"progress-text\">${Math.round(progress)}%</div>
        </div>
      `;
      
      els.achievementsList.appendChild(card);
    });
  }

  // Social features (mock implementation)
  function showSocial() {
    state.showingSocial = true;
    els.social.classList.remove('hidden');
    els.social.classList.add('animate-fade-in');
    
    // Hide other sections
    els.setup.classList.add('hidden');
    els.summary.classList.add('hidden');
    
    renderLeaderboard();
    
    // Voice announcement
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.announceNavigation('social');
    }
  }

  function hideSocial() {
    state.showingSocial = false;
    els.social.classList.add('hidden');
    els.setup.classList.remove('hidden');
  }

  function renderLeaderboard() {
    if (!els.leaderboard) return;
    
    // Mock leaderboard data
    const leaderboardData = [
      { name: 'Sarah Johnson', score: 95, avatar: 'SJ', sessions: 45 },
      { name: 'Mike Chen', score: 92, avatar: 'MC', sessions: 38 },
      { name: 'You', score: 87, avatar: 'YU', sessions: 23 },
      { name: 'Anna Smith', score: 85, avatar: 'AS', sessions: 31 },
      { name: 'David Brown', score: 83, avatar: 'DB', sessions: 28 }
    ];
    
    els.leaderboard.innerHTML = '';
    
    leaderboardData.forEach((user, index) => {
      const item = document.createElement('div');
      item.className = `leaderboard-item ${user.name === 'You' ? 'current-user' : ''} animate-slide-in-left`;
      
      item.innerHTML = `
        <div class=\"leaderboard-rank\">#${index + 1}</div>
        <div class=\"leaderboard-avatar\">${user.avatar}</div>
        <div class=\"leaderboard-info\">
          <div class=\"leaderboard-name\">${user.name}</div>
          <div class=\"leaderboard-stats\">${user.sessions} sessions completed</div>
        </div>
        <div class=\"leaderboard-score\">${user.score}%</div>
      `;
      
      els.leaderboard.appendChild(item);
    });
  }

  // Event handlers and other utility functions
  const computeWeakTopics = (topicStats) => {
    const list = Object.entries(topicStats).map(([topic, values]) => {
      const accuracy = values.total === 0 ? 0 : values.correct / values.total;
      return { topic, accuracy, total: values.total };
    });
    list.sort((a, b) => a.accuracy - b.accuracy);
    const weak = list.filter((item) => item.accuracy < 0.6);
    return (weak.length ? weak : list.slice(0, 3)).filter((item) => item.total > 0);
  };

  const setVisibility = (showQuiz, showSummary) => {
    els.quiz.classList.toggle('hidden', !showQuiz);
    els.summary.classList.toggle('hidden', !showSummary);
    els.setup.classList.toggle('hidden', showQuiz || showSummary);
    
    // Hide advanced sections
    els.analytics.classList.add('hidden');
    els.achievements.classList.add('hidden');
    els.social.classList.add('hidden');
  };

  const updateTimerVisibility = () => {
    const isTimed = state.mode === 'timed';
    els.timeWrap.classList.toggle('hidden', !isTimed);
    els.timer.classList.toggle('hidden', !isTimed);
  };

  const setTopics = (questions) => {
    const topics = Array.from(new Set(questions.map((q) => q.topic))).sort();
    els.topicSelect.innerHTML = '<option value=\"all\">All topics</option>';
    topics.forEach((topic) => {
      const option = document.createElement('option');
      option.value = topic;
      option.textContent = topic;
      els.topicSelect.appendChild(option);
    });
  };

  const applyTopicFilter = () => {
    const topic = els.topicSelect.value;
    if (topic === 'all') {
      state.filteredQuestions = state.allQuestions.slice();
    } else {
      state.filteredQuestions = state.allQuestions.filter((q) => q.topic === topic);
    }
    if (els.setupNote) {
      els.setupNote.textContent = state.filteredQuestions.length
        ? `${state.filteredQuestions.length} questions available.`
        : 'No questions available for this topic yet.';
    }
    els.startBtn.disabled = state.filteredQuestions.length === 0;
  };

  const updateProgress = () => {
    const total = state.sessionQuestions.length;
    const current = state.currentIndex + 1;
    const percentage = total === 0 ? 0 : (current / total) * 100;
    els.progressText.textContent = `Question ${current} of ${total}`;
    els.progressBar.style.width = `${percentage}%`;
    
    // Voice progress announcement
    if (voiceEngine && voiceEngine.isEnabled && current % 5 === 0) {
      voiceEngine.announceProgress(current, total);
    }
  };

  const showExplanation = (question, chosenIndex) => {
    const isCorrect = chosenIndex === question.answer;
    els.answerFeedback.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
    els.answerFeedback.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
    
    // Enhanced explanation with proper formatting
    const correctOption = question.options[question.answer];
    const correctLetter = String.fromCharCode(65 + question.answer); // A, B, C, D
    
    // Format explanation with line breaks
    const formattedExplanation = question.explanation.replace(/\\n/g, '\n');
    
    els.explanationText.innerHTML = `
      <div class="explanation-header">
        <strong>Correct Answer: ${correctLetter}. ${correctOption}</strong>
      </div>
      <div class="explanation-content">
        ${formattedExplanation.split('\n').map(line => 
          line.trim() ? `<p>${line.trim()}</p>` : ''
        ).join('')}
      </div>
    `;
    
    els.explanation.classList.remove('hidden');
    els.explanation.classList.add('animate-slide-in-left');
  };

  const scheduleAutoAdvance = () => {
    clearTimeout(state.autoAdvanceTimer);
    if (!els.autoAdvance || !els.autoAdvance.checked) {
      return;
    }
    if (state.currentIndex >= state.sessionQuestions.length - 1) {
      return;
    }
    state.autoAdvanceTimer = window.setTimeout(() => {
      handleNext();
    }, 1200);
  };

  const startTimer = () => {
    clearInterval(state.timerId);
    state.timerId = null;
    if (state.mode !== 'timed') {
      return;
    }
    const minutes = Number(els.timeLimit.value);
    const safeMinutes = Number.isFinite(minutes) ? Math.max(1, minutes) : 30;
    state.timeLeft = safeMinutes * 60;
    els.timer.textContent = formatTime(state.timeLeft);
    state.timerId = window.setInterval(() => {
      state.timeLeft -= 1;
      els.timer.textContent = formatTime(Math.max(0, state.timeLeft));
      
      // Voice time warnings
      if (voiceEngine && voiceEngine.isEnabled) {
        if (state.timeLeft === 300) { // 5 minutes
          voiceEngine.announceTimeRemaining(5, 0);
        } else if (state.timeLeft === 60) { // 1 minute
          voiceEngine.announceTimeRemaining(0, 60);
        } else if (state.timeLeft === 30) { // 30 seconds
          voiceEngine.announceTimeRemaining(0, 30);
        }
      }
      
      if (state.timeLeft <= 0) {
        clearInterval(state.timerId);
        finishQuiz();
      }
    }, 1000);
  };

  const handleNext = () => {
    clearTimeout(state.autoAdvanceTimer);
    const answered = typeof state.answers[state.currentIndex] === 'number';
    if (!answered) {
      els.answerFeedback.textContent = 'Choose an answer to continue.';
      els.answerFeedback.style.color = 'var(--danger)';
      els.explanationText.textContent = '';
      els.explanation.classList.remove('hidden');
      
      // Voice reminder
      if (voiceEngine && voiceEngine.isEnabled) {
        voiceEngine.speak('Please select an answer to continue');
      }
      
      return;
    }
    if (state.currentIndex < state.sessionQuestions.length - 1) {
      state.currentIndex += 1;
      renderQuestion();
    } else {
      finishQuiz();
    }
  };

  const updateConnectionStatus = () => {
    if (!els.statusPill || !els.statusText) return;
    const online = navigator.onLine;
    els.statusPill.classList.toggle('offline', !online);
    els.statusText.textContent = online ? 'Online' : 'Offline mode';
    
    // Voice announcement for connection changes
    if (voiceEngine && voiceEngine.isEnabled) {
      voiceEngine.speak(online ? 'Connection restored' : 'Now in offline mode');
    }
  };

  const renderHeaderStats = (stats) => {
    const meta = stats._meta || {};
    if (els.streakStat) {
      const streak = meta.streak || 0;
      els.streakStat.textContent = `${streak} day${streak === 1 ? '' : 's'}`;
    }
    if (els.goalStat) {
      const goal = meta.dailyGoal || 20;
      const done = meta.dailyAnswered || 0;
      els.goalStat.textContent = `${done} / ${goal}`;
    }
    syncDailyGoalInput(stats);
  };

  const syncDailyGoalInput = (stats) => {
    if (!els.dailyGoalInput) return;
    if (document.activeElement === els.dailyGoalInput) return;
    const meta = stats._meta || {};
    const goal = meta.dailyGoal || 20;
    els.dailyGoalInput.value = String(goal);
  };

  const saveDailyGoal = (value) => {
    const stats = getStats();
    const parsed = Number(value);
    const goal = Number.isFinite(parsed) ? clamp(Math.round(parsed), 5, 200) : 20;
    if (!stats._meta.dailyDate) {
      stats._meta.dailyDate = getLocalDateString();
    }
    stats._meta.dailyGoal = goal;
    saveStats(stats);
    renderHeaderStats(stats);
    renderDashboard(stats);
    if (els.goalSummary && !els.summary.classList.contains('hidden')) {
      const done = stats._meta.dailyAnswered || 0;
      els.goalSummary.textContent = `Daily goal: ${done} / ${goal} questions today.`;
    }
    syncDailyGoalInput(stats);
  };

  const renderDashboard = (stats) => {
    if (!els.dashboardContent) return;
    const subjects = Object.keys(stats).filter((key) => key !== '_meta');
    els.dashboardContent.innerHTML = '';

    if (!subjects.length) {
      const empty = document.createElement('p');
      empty.className = 'muted';
      empty.textContent = 'No sessions yet. Start a practice to see your topic dashboard.';
      els.dashboardContent.appendChild(empty);
      return;
    }

    const fragment = document.createDocumentFragment();
    subjects.forEach((subject) => {
      const subjectStats = stats[subject];
      const card = document.createElement('div');
      card.className = 'subject-card animate-fade-in';

      const header = document.createElement('div');
      header.className = 'subject-card__header';
      const title = document.createElement('div');
      title.className = 'subject-card__title';
      title.textContent = formatSubjectName(subject);
      const overall = subjectStats.attempts
        ? Math.round((subjectStats.correct / subjectStats.attempts) * 100)
        : 0;
      const meta = document.createElement('div');
      meta.className = 'subject-card__meta';
      meta.textContent = `${overall}% overall`;
      header.appendChild(title);
      header.appendChild(meta);

      const attempts = document.createElement('div');
      attempts.className = 'muted small';
      attempts.textContent = `Attempts: ${subjectStats.attempts || 0}`;

      card.appendChild(header);
      card.appendChild(attempts);

      const topics = Object.entries(subjectStats.topics || {});
      if (!topics.length) {
        const empty = document.createElement('div');
        empty.className = 'muted small';
        empty.textContent = 'No topic data yet.';
        card.appendChild(empty);
      } else {
        topics.sort((a, b) => {
          const aAcc = a[1].total ? a[1].correct / a[1].total : 0;
          const bAcc = b[1].total ? b[1].correct / b[1].total : 0;
          return aAcc - bAcc;
        });
        topics.forEach(([topic, values]) => {
          const accuracy = values.total === 0 ? 0 : Math.round((values.correct / values.total) * 100);
          const row = document.createElement('div');
          row.className = 'topic-row animate-slide-in-left';
          const rowHeader = document.createElement('div');
          rowHeader.className = 'topic-row__header';
          rowHeader.innerHTML = `<span>${topic}</span><span>${accuracy}%</span>`;
          const bar = document.createElement('div');
          bar.className = 'topic-row__bar';
          const fill = document.createElement('div');
          fill.className = 'topic-row__fill';
          fill.style.width = `${accuracy}%`;
          fill.style.backgroundColor = accuracy >= 80 ? 'var(--success)' : 
                                     accuracy >= 60 ? 'var(--warning)' : 'var(--danger)';
          bar.appendChild(fill);
          row.appendChild(rowHeader);
          row.appendChild(bar);
          card.appendChild(row);
        });
      }

      fragment.appendChild(card);
    });

    els.dashboardContent.appendChild(fragment);
  };

  const saveLastSummary = (summary) => {
    localStorage.setItem(LAST_SUMMARY_KEY, JSON.stringify(summary));
  };

  const renderLastSummary = () => {
    const last = localStorage.getItem(LAST_SUMMARY_KEY);
    if (!last) return;
    try {
      const summary = JSON.parse(last);
      if (!summary || !summary.subject) return;
      const weak = (summary.weakTopics || [])
        .map((item) => item.topic)
        .join(', ');
      els.history.textContent = `Last session: ${summary.subject} ${summary.score}/${summary.total} (${summary.percent}%).`;
      if (weak) {
        els.weakTopics.textContent = `Recent weak topics: ${weak}`;
      }
    } catch (error) {
      // Ignore parse errors.
    }
  };

  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
      });
    }
  };

  // Tab management for social features
  function switchTab(tabName) {
    // Update tab buttons
    els.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    
    // Update tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
      content.classList.toggle('hidden', content.id !== tabName);
      content.classList.toggle('active', content.id === tabName);
    });
    
    // Load tab-specific content
    switch(tabName) {
      case 'leaderboard':
        renderLeaderboard();
        break;
      case 'challenges':
        renderChallenges();
        break;
      case 'groups':
        renderGroups();
        break;
    }
  }

  function renderChallenges() {
    if (!els.challenges) return;
    
    // Mock challenges data
    const challenges = [
      { title: 'Math Marathon', description: 'Answer 100 math questions', progress: 45 },
      { title: 'Speed Demon', description: 'Complete 10 questions in under 5 seconds each', progress: 7 },
      { title: 'Perfect Week', description: 'Get 100% for 7 consecutive days', progress: 3 }
    ];
    
    els.challenges.innerHTML = challenges.map(challenge => `
      <div class=\"challenge-card animate-fade-in\">
        <div class=\"challenge-title\">${challenge.title}</div>
        <div class=\"challenge-description\">${challenge.description}</div>
        <div class=\"challenge-progress\">
          <div class=\"progress-bar\">
            <div class=\"progress-fill\" style=\"width: ${challenge.progress}%\"></div>
          </div>
          <div class=\"progress-text\">${challenge.progress}%</div>
        </div>
      </div>
    `).join('');
  }

  function renderGroups() {
    if (!els.groups) return;
    
    // Mock groups data
    const groups = [
      { name: 'WAEC Warriors', members: 234, description: 'General WAEC preparation group' },
      { name: 'Math Masters', members: 89, description: 'Focus on mathematics topics' },
      { name: 'Science Squad', members: 156, description: 'Physics, Chemistry, and Biology' }
    ];
    
    els.groups.innerHTML = groups.map(group => `
      <div class=\"group-card animate-slide-in-right\">
        <div class=\"group-avatar\">${group.name.charAt(0)}</div>
        <div class=\"group-info\">
          <div class=\"group-name\">${group.name}</div>
          <div class=\"group-description\">${group.description}</div>
          <div class=\"group-members\">${group.members} members</div>
        </div>
        <button class=\"group-join-btn\" type=\"button\">Join</button>
      </div>
    `).join('');
  }

  // Main event binding function
  const bindEvents = () => {
    // Original event handlers
    els.subjectSelect.addEventListener('change', (event) => {
      loadSubject(event.target.value);
    });

    els.modeSelect.addEventListener('change', (event) => {
      state.mode = event.target.value;
      updateTimerVisibility();
    });

    els.topicSelect.addEventListener('change', applyTopicFilter);
    els.startBtn.addEventListener('click', startQuiz);
    els.nextBtn.addEventListener('click', handleNext);
    els.finishBtn.addEventListener('click', finishQuiz);
    els.restartBtn.addEventListener('click', () => {
      state.reviewMode = false;
      setVisibility(false, false);
      renderLastSummary();
    });

    // Quick start buttons
    if (els.quickButtons.length) {
      els.quickButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const mode = btn.dataset.quick || 'practice';
          const questions = Number(btn.dataset.questions) || 20;
          const minutes = Number(btn.dataset.minutes) || 30;
          els.modeSelect.value = mode;
          state.mode = mode;
          updateTimerVisibility();
          els.questionCount.value = String(questions);
          if (mode === 'timed') {
            els.timeLimit.value = String(minutes);
          }
          startQuiz();
        });
      });
    }

    // Question option clicks
    els.options.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const index = Number(target.dataset.index);
      if (!Number.isFinite(index)) return;
      handleAnswer(index);
    });

    // Review button
    if (els.reviewBtn) {
      els.reviewBtn.addEventListener('click', () => {
        if (!state.missedQuestions.length) return;
        state.reviewMode = true;
        state.mode = 'practice';
        els.modeSelect.value = 'practice';
        updateTimerVisibility();
        state.sessionQuestions = state.missedQuestions.slice();
        state.currentIndex = 0;
        state.score = 0;
        state.answers = [];
        setVisibility(true, false);
        renderQuestion();
      });
    }

    // Daily goal input
    if (els.dailyGoalInput) {
      els.dailyGoalInput.addEventListener('change', (event) => {
        saveDailyGoal(event.target.value);
      });
      els.dailyGoalInput.addEventListener('blur', (event) => {
        saveDailyGoal(event.target.value);
      });
    }

    // Advanced feature buttons
    if (els.themeToggle) {
      els.themeToggle.addEventListener('click', toggleTheme);
    }

    if (els.voiceToggle) {
      els.voiceToggle.addEventListener('click', () => {
        if (voiceEngine) {
          state.voiceEnabled = voiceEngine.toggle();
          updateVoiceToggle();
          
          if (state.voiceEnabled) {
            voiceEngine.speak('Voice narration enabled');
          }
        }
      });
    }

    if (els.analyticsBtn) {
      els.analyticsBtn.addEventListener('click', showAnalytics);
    }

    if (els.closeAnalytics) {
      els.closeAnalytics.addEventListener('click', hideAnalytics);
    }

    if (els.achievementsBtn) {
      els.achievementsBtn.addEventListener('click', showAchievements);
    }

    if (els.closeAchievements) {
      els.closeAchievements.addEventListener('click', hideAchievements);
    }

    if (els.socialBtn) {
      els.socialBtn.addEventListener('click', showSocial);
    }

    if (els.closeSocial) {
      els.closeSocial.addEventListener('click', hideSocial);
    }

    // Tab buttons
    els.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // PWA install
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      els.installBtn.classList.remove('hidden');
    });

    els.installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      els.installBtn.classList.add('hidden');
    });

    // Network status
    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);

    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
      // Only handle shortcuts when in quiz mode
      if (els.quiz.classList.contains('hidden')) return;
      
      // Number keys 1-4 for options A-D
      if (event.key >= '1' && event.key <= '4') {
        const index = parseInt(event.key) - 1;
        const optionBtn = els.options.children[index];
        if (optionBtn && !optionBtn.disabled) {
          event.preventDefault();
          handleAnswer(index);
        }
      }
      
      // Space or Enter for next
      if ((event.key === ' ' || event.key === 'Enter') && 
          typeof state.answers[state.currentIndex] === 'number') {
        event.preventDefault();
        handleNext();
      }
      
      // V for voice toggle
      if (event.key === 'v' && event.ctrlKey) {
        event.preventDefault();
        els.voiceToggle.click();
      }
    });

    // Achievement toast click to dismiss
    if (els.achievementToast) {
      els.achievementToast.addEventListener('click', () => {
        els.achievementToast.classList.add('hidden');
      });
    }

    // Accessibility: Focus management
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        // Close any open overlays
        if (!els.analytics.classList.contains('hidden')) hideAnalytics();
        if (!els.achievements.classList.contains('hidden')) hideAchievements();
        if (!els.social.classList.contains('hidden')) hideSocial();
      }
    });
  };

  // Main initialization function
  const init = async () => {
    console.log('Initializing Advanced WAEC Practice App...');
    
    try {
      // Initialize theme first
      initializeTheme();
      
      // Initialize core systems with timeout
      const initPromise = initializeSystems();
      const timeoutPromise = new Promise(resolve => setTimeout(resolve, 3000));
      
      await Promise.race([initPromise, timeoutPromise]);
      
      // Bind all event handlers
      bindEvents();
      
      // Initialize app state
      updateTimerVisibility();
      
      // Load initial subject
      try {
        await loadSubject(state.subject);
      } catch (error) {
        console.error('Failed to load initial subject, using fallback:', error);
        // Set fallback data to prevent hanging
        state.allQuestions = [
          {
            id: 1,
            topic: "Sample",
            question: "This is a sample question. Select any option to test the app.",
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: 0,
            explanation: "This is a sample explanation to test the app functionality."
          }
        ];
        setTopics(state.allQuestions);
        applyTopicFilter();
      }
      
      registerServiceWorker();
      renderLastSummary();
      
      // Load and render initial data
      const stats = getStats();
      renderHeaderStats(stats);
      renderDashboard(stats);
      updateConnectionStatus();
      
      // Initial voice announcement
      if (voiceEngine && voiceEngine.isEnabled) {
        setTimeout(() => {
          voiceEngine.speak('Welcome to WAEC Master AI. All systems ready.');
        }, 1000);
      }
      
      console.log('WAEC Master AI initialized successfully');
      
    } catch (error) {
      console.error('Initialization error:', error);
      // Force hide loading overlay
      hideLoading();
      alert('Some advanced features may not work, but basic functionality is available. Please refresh to try again.');
    }
  };

  // Start the application
  init();
})();