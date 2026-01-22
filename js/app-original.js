(() => {
  const els = {
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
    installBtn: document.getElementById('installBtn')
  };

  const STORAGE_KEY = 'waec_stats_v1';
  const LAST_SUMMARY_KEY = 'waec_last_summary_v1';

  const state = {
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
    autoAdvanceTimer: null
  };

  let deferredInstallPrompt = null;

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

  const getStats = () => {
    try {
      const stats = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      if (!stats._meta) {
        stats._meta = {
          streak: 0,
          lastPracticeDate: null,
          dailyGoal: 20,
          dailyAnswered: 0,
          dailyDate: null
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
          dailyDate: null
        }
      };
    }
  };

  const saveStats = (stats) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  };

  const saveLastSummary = (summary) => {
    localStorage.setItem(LAST_SUMMARY_KEY, JSON.stringify(summary));
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

  const setVisibility = (showQuiz, showSummary) => {
    els.quiz.classList.toggle('hidden', !showQuiz);
    els.summary.classList.toggle('hidden', !showSummary);
    els.setup.classList.toggle('hidden', showQuiz || showSummary);
  };

  const updateTimerVisibility = () => {
    const isTimed = state.mode === 'timed';
    els.timeWrap.classList.toggle('hidden', !isTimed);
    els.timer.classList.toggle('hidden', !isTimed);
  };

  const setTopics = (questions) => {
    const topics = Array.from(new Set(questions.map((q) => q.topic))).sort();
    els.topicSelect.innerHTML = '<option value="all">All topics</option>';
    topics.forEach((topic) => {
      const option = document.createElement('option');
      option.value = topic;
      option.textContent = topic;
      els.topicSelect.appendChild(option);
    });
  };

  const loadSubject = async (subject) => {
    state.subject = subject;
    try {
      const response = await fetch(`./data/${subject}.json`);
      if (!response.ok) {
        throw new Error('Failed to load questions.');
      }
      const questions = await response.json();
      state.allQuestions = questions;
      setTopics(questions);
      applyTopicFilter();
    } catch (error) {
      state.allQuestions = [];
      state.filteredQuestions = [];
      els.topicSelect.innerHTML = '<option value="all">All topics</option>';
      els.questionText.textContent = 'Unable to load questions.';
      if (els.setupNote) {
        els.setupNote.textContent = 'Unable to load questions for this subject.';
      }
      els.startBtn.disabled = true;
    }
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
  };

  const renderQuestion = () => {
    const current = state.sessionQuestions[state.currentIndex];
    if (!current) {
      finishQuiz();
      return;
    }

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
    }
  };

  const showExplanation = (question, chosenIndex) => {
    const isCorrect = chosenIndex === question.answer;
    els.answerFeedback.textContent = isCorrect ? 'Correct!' : 'Not quite.';
    els.answerFeedback.style.color = isCorrect ? 'var(--success)' : 'var(--danger)';
    els.explanationText.textContent = `Answer: ${question.options[question.answer]} — ${question.explanation}`;
    els.explanation.classList.remove('hidden');
  };

  const handleAnswer = (index) => {
    if (typeof state.answers[state.currentIndex] === 'number') {
      return;
    }

    state.answers[state.currentIndex] = index;
    const current = state.sessionQuestions[state.currentIndex];
    if (index === current.answer) {
      state.score += 1;
    }
    renderQuestion();
    scheduleAutoAdvance();
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
      if (state.timeLeft <= 0) {
        clearInterval(state.timerId);
        finishQuiz();
      }
    }, 1000);
  };

  const startQuiz = () => {
    applyTopicFilter();
    if (!state.filteredQuestions.length) {
      return;
    }
    state.reviewMode = false;
    state.missedQuestions = [];
    const totalRequested = Number(els.questionCount.value) || 20;
    const shuffled = shuffle(state.filteredQuestions);
    state.sessionQuestions = shuffled.slice(0, Math.max(1, totalRequested));
    state.currentIndex = 0;
    state.score = 0;
    state.answers = [];

    setVisibility(true, false);
    startTimer();
    renderQuestion();
  };

  const computeWeakTopics = (topicStats) => {
    const list = Object.entries(topicStats).map(([topic, values]) => {
      const accuracy = values.total === 0 ? 0 : values.correct / values.total;
      return { topic, accuracy, total: values.total };
    });
    list.sort((a, b) => a.accuracy - b.accuracy);
    const weak = list.filter((item) => item.accuracy < 0.6);
    return (weak.length ? weak : list.slice(0, 3)).filter((item) => item.total > 0);
  };

  const finishQuiz = () => {
    clearInterval(state.timerId);
    state.timerId = null;
    clearTimeout(state.autoAdvanceTimer);

    const total = state.sessionQuestions.length;
    const percent = total === 0 ? 0 : Math.round((state.score / total) * 100);

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
      saveLastSummary({
        subject: state.subject,
        score: state.score,
        total,
        percent,
        weakTopics
      });
    }

    renderSummary(stats, weakTopics, percent, total, topicStats, missed);
    setVisibility(false, true);
    renderHeaderStats(stats);
    renderDashboard(stats);
  };

  const renderSummary = (stats, weakTopics, percent, total, topicStats, missed) => {
    const label = state.reviewMode ? 'Review score' : 'Score';
    els.scoreSummary.textContent = `${label}: ${state.score} / ${total} (${percent}%)`;

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

    if (els.topicBreakdown) {
      els.topicBreakdown.innerHTML = '';
      const entries = Object.entries(topicStats);
      entries.sort((a, b) => a[0].localeCompare(b[0]));
      entries.forEach(([topic, values]) => {
        const accuracy = values.total === 0 ? 0 : Math.round((values.correct / values.total) * 100);
        const row = document.createElement('div');
        row.className = 'topic-row';

        const header = document.createElement('div');
        header.className = 'topic-row__header';
        header.innerHTML = `<span>${topic}</span><span>${accuracy}%</span>`;

        const bar = document.createElement('div');
        bar.className = 'topic-row__bar';
        const fill = document.createElement('div');
        fill.className = 'topic-row__fill';
        fill.style.width = `${accuracy}%`;
        bar.appendChild(fill);

        row.appendChild(header);
        row.appendChild(bar);
        els.topicBreakdown.appendChild(row);
      });
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
          card.className = 'missed-card';
          const title = document.createElement('div');
          title.className = 'missed-card__title';
          title.textContent = question.question;
          const answer = document.createElement('div');
          answer.className = 'muted small';
          answer.textContent = `Correct answer: ${question.options[question.answer]}`;
          card.appendChild(title);
          card.appendChild(answer);
          fragment.appendChild(card);
        });
        els.missedList.appendChild(fragment);
      }
    }
  };

  const handleNext = () => {
    clearTimeout(state.autoAdvanceTimer);
    const answered = typeof state.answers[state.currentIndex] === 'number';
    if (!answered) {
      els.answerFeedback.textContent = 'Choose an answer to continue.';
      els.answerFeedback.style.color = 'var(--danger)';
      els.explanationText.textContent = '';
      els.explanation.classList.remove('hidden');
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
      card.className = 'subject-card';

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
          row.className = 'topic-row';
          const rowHeader = document.createElement('div');
          rowHeader.className = 'topic-row__header';
          rowHeader.innerHTML = `<span>${topic}</span><span>${accuracy}%</span>`;
          const bar = document.createElement('div');
          bar.className = 'topic-row__bar';
          const fill = document.createElement('div');
          fill.className = 'topic-row__fill';
          fill.style.width = `${accuracy}%`;
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

  const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js');
      });
    }
  };

  const bindEvents = () => {
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

    els.options.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const index = Number(target.dataset.index);
      if (!Number.isFinite(index)) return;
      handleAnswer(index);
    });

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

    if (els.dailyGoalInput) {
      els.dailyGoalInput.addEventListener('change', (event) => {
        saveDailyGoal(event.target.value);
      });
      els.dailyGoalInput.addEventListener('blur', (event) => {
        saveDailyGoal(event.target.value);
      });
    }

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

    window.addEventListener('online', updateConnectionStatus);
    window.addEventListener('offline', updateConnectionStatus);
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

  const init = () => {
    bindEvents();
    updateTimerVisibility();
    loadSubject(state.subject);
    registerServiceWorker();
    renderLastSummary();
    const stats = getStats();
    renderHeaderStats(stats);
    renderDashboard(stats);
    updateConnectionStatus();
  };

  init();
})();
