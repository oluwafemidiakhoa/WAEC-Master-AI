/**
 * Feedback Survey System
 * Collects user feedback about app usability, features, and satisfaction
 * Professional UI with smooth animations and comprehensive analytics
 */

const FeedbackEngine = (function() {
  'use strict';

  const STORAGE_KEY = 'waec_feedback_v1';
  const FEEDBACK_COOLDOWN = 24 * 60 * 60 * 1000; // 24 hours between prompts

  // Icons for different question types
  const ICONS = {
    satisfaction: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
    ease: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 12a4 4 0 1 1-8 0"></path></svg>`,
    features: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    wishlist: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
    speed: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    design: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"></circle><path d="M17.5 10.5l-5 5-1.5-1.5-4 4L3 14.5"></path><path d="M21 15l-6 6-4.5-4.5"></path></svg>`,
    recommend: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    suggestion: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    bug: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="6" width="8" height="14" rx="4"></rect><path d="M19 10h-2"></path><path d="M19 14h-2"></path><path d="M7 10H5"></path><path d="M7 14H5"></path><path d="M12 6V3"></path><path d="M10 3h4"></path></svg>`,
    love: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
  };

  // Survey questions configuration with icons and better descriptions
  const surveyQuestions = [
    {
      id: 'overall_satisfaction',
      type: 'rating',
      icon: ICONS.satisfaction,
      question: 'How satisfied are you with the WAEC Practice app overall?',
      subtitle: 'Your overall experience matters to us',
      required: true
    },
    {
      id: 'ease_of_use',
      type: 'rating',
      icon: ICONS.ease,
      question: 'How easy is the app to use?',
      subtitle: 'Navigation, finding features, understanding the interface',
      required: true
    },
    {
      id: 'feature_usefulness',
      type: 'multiselect',
      icon: ICONS.features,
      question: 'Which features do you find most useful?',
      subtitle: 'Select all that apply',
      options: [
        { value: 'practice_mode', label: 'Practice Mode', icon: '📝' },
        { value: 'timed_exam', label: 'Timed Exam Mode', icon: '⏱️' },
        { value: 'topic_filter', label: 'Topic Filtering', icon: '🎯' },
        { value: 'explanations', label: 'Answer Explanations', icon: '💡' },
        { value: 'dashboard', label: 'Progress Dashboard', icon: '📊' },
        { value: 'analytics', label: 'Learning Analytics', icon: '📈' },
        { value: 'achievements', label: 'Achievements & Badges', icon: '🏆' },
        { value: 'leaderboard', label: 'Leaderboard', icon: '🥇' },
        { value: 'offline', label: 'Offline Mode', icon: '📴' },
        { value: 'voice', label: 'Voice Narration', icon: '🔊' }
      ],
      required: false
    },
    {
      id: 'missing_features',
      type: 'multiselect',
      icon: ICONS.wishlist,
      question: 'What features would you like to see added?',
      subtitle: 'Help us prioritize our roadmap',
      options: [
        { value: 'more_subjects', label: 'More Subjects', icon: '📚' },
        { value: 'more_questions', label: 'More Practice Questions', icon: '❓' },
        { value: 'study_notes', label: 'Study Notes & Summaries', icon: '📝' },
        { value: 'video_explanations', label: 'Video Explanations', icon: '🎬' },
        { value: 'chat_support', label: 'AI Tutoring Support', icon: '🤖' },
        { value: 'study_groups', label: 'Study Groups', icon: '👥' },
        { value: 'mock_exams', label: 'Full Mock Exams', icon: '📋' },
        { value: 'notifications', label: 'Study Reminders', icon: '🔔' },
        { value: 'performance_reports', label: 'Detailed Reports', icon: '📊' },
        { value: 'topic_lessons', label: 'Topic-based Lessons', icon: '🎓' }
      ],
      required: false
    },
    {
      id: 'app_speed',
      type: 'rating',
      icon: ICONS.speed,
      question: 'How would you rate the app\'s speed and performance?',
      subtitle: 'Loading times, responsiveness, smoothness',
      required: true
    },
    {
      id: 'design_rating',
      type: 'rating',
      icon: ICONS.design,
      question: 'How would you rate the app\'s design and appearance?',
      subtitle: 'Colors, layout, visual appeal',
      required: true
    },
    {
      id: 'recommendation',
      type: 'nps',
      icon: ICONS.recommend,
      question: 'How likely are you to recommend this app to a friend?',
      subtitle: '0 = Not likely at all, 10 = Extremely likely',
      required: true
    },
    {
      id: 'improvement_suggestions',
      type: 'textarea',
      icon: ICONS.suggestion,
      question: 'What would make this app better for you?',
      subtitle: 'We read every suggestion',
      placeholder: 'Share your ideas for improvement...',
      required: false
    },
    {
      id: 'bugs_issues',
      type: 'textarea',
      icon: ICONS.bug,
      question: 'Have you encountered any bugs or issues?',
      subtitle: 'Help us fix problems faster',
      placeholder: 'Describe any problems you\'ve experienced...',
      required: false
    },
    {
      id: 'favorite_aspect',
      type: 'textarea',
      icon: ICONS.love,
      question: 'What do you like most about the app?',
      subtitle: 'Let us know what we\'re doing right',
      placeholder: 'Tell us what you love about WAEC Practice...',
      required: false
    }
  ];

  let state = {
    feedbackHistory: [],
    lastPromptTime: null,
    currentSurveyResponses: {},
    currentQuestionIndex: 0,
    surveyStartTime: null
  };

  // Initialize the feedback system
  function init() {
    loadState();
    setupEventListeners();
    renderFeedbackButton();

    // Check if we should auto-prompt for feedback
    checkAutoPrompt();
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.feedbackHistory = parsed.feedbackHistory || [];
        state.lastPromptTime = parsed.lastPromptTime || null;
      }
    } catch (e) {
      console.warn('Could not load feedback state:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        feedbackHistory: state.feedbackHistory,
        lastPromptTime: state.lastPromptTime
      }));
    } catch (e) {
      console.warn('Could not save feedback state:', e);
    }
  }

  function setupEventListeners() {
    // Feedback button click
    document.addEventListener('click', (e) => {
      if (e.target.closest('#feedbackBtn')) {
        openSurvey();
      }
      if (e.target.closest('#closeFeedback')) {
        closeSurvey();
      }
      if (e.target.closest('#submitFeedback')) {
        submitSurvey();
      }
      if (e.target.closest('#nextQuestion')) {
        nextQuestion();
      }
      if (e.target.closest('#prevQuestion')) {
        prevQuestion();
      }
      if (e.target.closest('#skipQuestion')) {
        skipQuestion();
      }
    });

    // Handle rating clicks
    document.addEventListener('click', (e) => {
      const star = e.target.closest('.feedback-star');
      if (star) {
        handleStarClick(star);
      }
      const npsBtn = e.target.closest('.nps-btn');
      if (npsBtn) {
        handleNPSClick(npsBtn);
      }
    });

    // Handle checkbox changes
    document.addEventListener('change', (e) => {
      if (e.target.closest('.feedback-checkbox')) {
        handleCheckboxChange(e.target);
      }
      if (e.target.closest('.feedback-textarea')) {
        handleTextareaChange(e.target);
      }
    });
  }

  function renderFeedbackButton() {
    // Add feedback button to header controls
    const headerControls = document.querySelector('.header__controls');
    if (headerControls && !document.getElementById('feedbackBtn')) {
      const feedbackBtn = document.createElement('button');
      feedbackBtn.id = 'feedbackBtn';
      feedbackBtn.className = 'icon-btn feedback-btn-pulse';
      feedbackBtn.type = 'button';
      feedbackBtn.title = 'Share Your Feedback';
      feedbackBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      `;
      headerControls.insertBefore(feedbackBtn, headerControls.firstChild);
    }
  }

  function checkAutoPrompt() {
    // Auto-prompt after certain conditions
    const stats = JSON.parse(localStorage.getItem('waec_stats_v2') || '{}');
    const totalAnswered = stats.totalAnswered || 0;
    const feedbackCount = state.feedbackHistory.length;

    // Prompt for feedback after every 50 questions if no recent feedback
    if (totalAnswered > 0 && totalAnswered % 50 === 0 && feedbackCount === 0) {
      const timeSinceLastPrompt = state.lastPromptTime
        ? Date.now() - state.lastPromptTime
        : Infinity;

      if (timeSinceLastPrompt > FEEDBACK_COOLDOWN) {
        setTimeout(() => showFeedbackPrompt(), 2000);
      }
    }
  }

  function showFeedbackPrompt() {
    state.lastPromptTime = Date.now();
    saveState();

    // Create a non-intrusive prompt
    const prompt = document.createElement('div');
    prompt.className = 'feedback-prompt animate-slide-in';
    prompt.innerHTML = `
      <div class="feedback-prompt__content">
        <div class="feedback-prompt__icon">💬</div>
        <div class="feedback-prompt__text">
          <strong>We'd love your feedback!</strong>
          <p>Help us improve your learning experience.</p>
        </div>
        <div class="feedback-prompt__actions">
          <button class="primary small" onclick="FeedbackEngine.openSurvey(); this.closest('.feedback-prompt').remove();">
            Give Feedback
          </button>
          <button class="ghost small" onclick="this.closest('.feedback-prompt').remove();">
            Later
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(prompt);

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
      if (prompt.parentNode) {
        prompt.classList.add('animate-fade-out');
        setTimeout(() => prompt.remove(), 300);
      }
    }, 10000);
  }

  function openSurvey() {
    state.currentQuestionIndex = 0;
    state.currentSurveyResponses = {};
    state.surveyStartTime = Date.now();

    // Create or show the feedback section
    let feedbackSection = document.getElementById('feedback');
    if (!feedbackSection) {
      feedbackSection = createFeedbackSection();
      document.querySelector('.app').appendChild(feedbackSection);
    }

    feedbackSection.classList.remove('hidden');
    renderCurrentQuestion();

    // Hide other sections
    document.querySelectorAll('.card').forEach(card => {
      if (card.id !== 'feedback') {
        card.classList.add('hidden');
      }
    });
  }

  function createFeedbackSection() {
    const section = document.createElement('section');
    section.id = 'feedback';
    section.className = 'card animate-fade-in feedback-card';
    section.innerHTML = `
      <div class="feedback-header">
        <div class="feedback-header__content">
          <div class="feedback-header__icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <div>
            <h2>We Value Your Feedback</h2>
            <p class="muted">Help us build a better learning experience for everyone</p>
          </div>
        </div>
        <button id="closeFeedback" class="icon-btn" type="button" title="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <div class="feedback-progress">
        <div class="feedback-steps">
          ${surveyQuestions.map((q, i) => `
            <div class="feedback-step ${i === 0 ? 'active' : ''}" data-step="${i}">
              <div class="feedback-step__dot"></div>
            </div>
          `).join('')}
        </div>
        <div class="feedback-progress__info">
          <span class="feedback-progress__text">Question <strong>1</strong> of <strong>${surveyQuestions.length}</strong></span>
          <span class="feedback-progress__time">~2 min</span>
        </div>
      </div>

      <div id="feedbackQuestionContainer" class="feedback-question-container">
        <!-- Question will be rendered here -->
      </div>

      <div class="feedback-actions">
        <button id="prevQuestion" class="ghost feedback-btn" type="button" disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
          Previous
        </button>
        <div class="feedback-actions__right">
          <button id="skipQuestion" class="outline feedback-btn" type="button">Skip</button>
          <button id="nextQuestion" class="primary feedback-btn" type="button">
            Next
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
          <button id="submitFeedback" class="primary feedback-btn feedback-submit hidden" type="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 2L11 13"></path>
              <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
            Submit Feedback
          </button>
        </div>
      </div>
    `;
    return section;
  }

  function renderCurrentQuestion() {
    const container = document.getElementById('feedbackQuestionContainer');
    const question = surveyQuestions[state.currentQuestionIndex];

    if (!container || !question) return;

    const currentResponse = state.currentSurveyResponses[question.id];

    let questionHTML = `
      <div class="feedback-question animate-fade-in">
        <div class="feedback-question__header">
          <div class="feedback-question__icon">${question.icon || ''}</div>
          <div class="feedback-question__text">
            <h3>${question.question}${question.required ? ' <span class="required">*</span>' : ''}</h3>
            ${question.subtitle ? `<p class="feedback-question__subtitle">${question.subtitle}</p>` : ''}
          </div>
        </div>
        <div class="feedback-question__content">
    `;

    switch (question.type) {
      case 'rating':
        questionHTML += renderRatingQuestion(question.id, currentResponse);
        break;
      case 'nps':
        questionHTML += renderNPSQuestion(question.id, currentResponse);
        break;
      case 'multiselect':
        questionHTML += renderMultiselectQuestion(question, currentResponse);
        break;
      case 'textarea':
        questionHTML += renderTextareaQuestion(question, currentResponse);
        break;
    }

    questionHTML += '</div></div>';
    container.innerHTML = questionHTML;

    // Update progress steps
    updateProgress();
    updateNavigationButtons();
  }

  function renderRatingQuestion(id, value) {
    const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isActive = value && i <= value;
      stars.push(`
        <button type="button" class="feedback-star ${isActive ? 'active' : ''}" data-question="${id}" data-value="${i}" title="${labels[i-1]}">
          <div class="star-bg"></div>
          <svg class="star-svg" width="40" height="40" viewBox="0 0 24 24" fill="${isActive ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <div class="star-particles"></div>
        </button>
      `);
    }
    return `
      <div class="feedback-rating">
        <div class="stars-container">
          ${stars.join('')}
        </div>
        <div class="rating-indicator ${value ? 'active' : ''}">
          <span class="rating-value-display">${value ? labels[value - 1] : 'Select a rating'}</span>
        </div>
        <div class="rating-labels">
          <span>😞</span>
          <span>🙂</span>
          <span>😊</span>
          <span>😃</span>
          <span>🤩</span>
        </div>
      </div>
    `;
  }

  function renderNPSQuestion(id, value) {
    const buttons = [];
    for (let i = 0; i <= 10; i++) {
      const isActive = value !== undefined && value === i;
      let category = 'detractor';
      if (i >= 7 && i <= 8) category = 'passive';
      if (i >= 9) category = 'promoter';

      buttons.push(`
        <button type="button" class="nps-btn nps-${category} ${isActive ? 'active' : ''}" data-question="${id}" data-value="${i}">
          <span class="nps-value">${i}</span>
        </button>
      `);
    }

    const categoryText = value !== undefined
      ? (value <= 6 ? 'Detractor' : value <= 8 ? 'Passive' : 'Promoter')
      : 'Select a score';

    const categoryClass = value !== undefined
      ? (value <= 6 ? 'detractor' : value <= 8 ? 'passive' : 'promoter')
      : '';

    return `
      <div class="feedback-nps">
        <div class="nps-scale-container">
          <div class="nps-scale">
            ${buttons.join('')}
          </div>
          <div class="nps-gradient-bar"></div>
        </div>
        <div class="nps-category ${categoryClass}">
          <span class="nps-category-text">${categoryText}</span>
        </div>
        <div class="nps-labels">
          <div class="nps-label-group">
            <span class="nps-emoji">😞</span>
            <span>Not at all likely</span>
          </div>
          <div class="nps-label-group">
            <span class="nps-emoji">🤩</span>
            <span>Extremely likely</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderMultiselectQuestion(question, values) {
    const selectedValues = values || [];
    const checkboxes = question.options.map(opt => {
      const isChecked = selectedValues.includes(opt.value);
      return `
        <label class="feedback-option ${isChecked ? 'selected' : ''}">
          <input type="checkbox" class="feedback-checkbox"
                 data-question="${question.id}"
                 value="${opt.value}"
                 ${isChecked ? 'checked' : ''}>
          <span class="feedback-option__icon">${opt.icon || ''}</span>
          <span class="feedback-option__label">${opt.label}</span>
          <span class="feedback-option__check">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </label>
      `;
    });
    return `<div class="feedback-multiselect">${checkboxes.join('')}</div>`;
  }

  function renderTextareaQuestion(question, value) {
    return `
      <div class="feedback-text">
        <textarea
          class="feedback-textarea"
          data-question="${question.id}"
          placeholder="${question.placeholder || 'Type your response...'}"
          rows="4"
        >${value || ''}</textarea>
      </div>
    `;
  }

  function handleStarClick(star) {
    const questionId = star.dataset.question;
    const value = parseInt(star.dataset.value);
    state.currentSurveyResponses[questionId] = value;

    const labels = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

    // Update visual state
    const container = star.closest('.feedback-rating');
    container.querySelectorAll('.feedback-star').forEach((s, index) => {
      const isActive = index < value;
      s.classList.remove('active');
      if (isActive) {
        setTimeout(() => s.classList.add('active'), index * 50);
      }
      s.querySelector('.star-svg').setAttribute('fill', isActive ? 'currentColor' : 'none');
    });

    // Update rating indicator
    const indicator = container.querySelector('.rating-indicator');
    const display = container.querySelector('.rating-value-display');
    if (indicator && display) {
      indicator.classList.add('active');
      display.textContent = labels[value - 1];
    }

    // Haptic feedback on mobile
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }

  function handleNPSClick(btn) {
    const questionId = btn.dataset.question;
    const value = parseInt(btn.dataset.value);
    state.currentSurveyResponses[questionId] = value;

    // Update visual state
    const container = btn.closest('.feedback-nps');
    container.querySelectorAll('.nps-btn').forEach(b => {
      b.classList.toggle('active', parseInt(b.dataset.value) === value);
    });

    // Update category indicator
    const category = container.querySelector('.nps-category');
    const categoryText = container.querySelector('.nps-category-text');

    if (category && categoryText) {
      category.classList.remove('detractor', 'passive', 'promoter');

      let text, className;
      if (value <= 6) {
        text = 'Detractor';
        className = 'detractor';
      } else if (value <= 8) {
        text = 'Passive';
        className = 'passive';
      } else {
        text = 'Promoter';
        className = 'promoter';
      }

      category.classList.add(className);
      categoryText.textContent = text;
    }

    // Haptic feedback
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }

  function handleCheckboxChange(checkbox) {
    const questionId = checkbox.dataset.question;
    const value = checkbox.value;

    if (!state.currentSurveyResponses[questionId]) {
      state.currentSurveyResponses[questionId] = [];
    }

    if (checkbox.checked) {
      state.currentSurveyResponses[questionId].push(value);
    } else {
      state.currentSurveyResponses[questionId] =
        state.currentSurveyResponses[questionId].filter(v => v !== value);
    }

    // Update visual state
    checkbox.closest('.feedback-option').classList.toggle('selected', checkbox.checked);
  }

  function handleTextareaChange(textarea) {
    const questionId = textarea.dataset.question;
    state.currentSurveyResponses[questionId] = textarea.value;
  }

  function updateProgress() {
    const progressText = document.querySelector('.feedback-progress__text');
    const steps = document.querySelectorAll('.feedback-step');

    // Update step indicators
    steps.forEach((step, index) => {
      step.classList.remove('active', 'completed');
      if (index < state.currentQuestionIndex) {
        step.classList.add('completed');
      } else if (index === state.currentQuestionIndex) {
        step.classList.add('active');
      }
    });

    // Update progress text
    if (progressText) {
      progressText.innerHTML = `Question <strong>${state.currentQuestionIndex + 1}</strong> of <strong>${surveyQuestions.length}</strong>`;
    }
  }

  function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevQuestion');
    const nextBtn = document.getElementById('nextQuestion');
    const skipBtn = document.getElementById('skipQuestion');
    const submitBtn = document.getElementById('submitFeedback');

    const isLastQuestion = state.currentQuestionIndex === surveyQuestions.length - 1;
    const currentQuestion = surveyQuestions[state.currentQuestionIndex];

    if (prevBtn) {
      prevBtn.disabled = state.currentQuestionIndex === 0;
    }

    if (nextBtn && submitBtn) {
      nextBtn.classList.toggle('hidden', isLastQuestion);
      submitBtn.classList.toggle('hidden', !isLastQuestion);
    }

    if (skipBtn) {
      skipBtn.classList.toggle('hidden', currentQuestion.required);
    }
  }

  function nextQuestion() {
    const currentQuestion = surveyQuestions[state.currentQuestionIndex];

    // Validate required questions
    if (currentQuestion.required) {
      const response = state.currentSurveyResponses[currentQuestion.id];
      if (response === undefined || response === null || response === '' ||
          (Array.isArray(response) && response.length === 0)) {
        showValidationError('Please answer this question before continuing.');
        return;
      }
    }

    if (state.currentQuestionIndex < surveyQuestions.length - 1) {
      transitionQuestion('next', () => {
        state.currentQuestionIndex++;
        renderCurrentQuestion();
      });
    }
  }

  function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
      transitionQuestion('prev', () => {
        state.currentQuestionIndex--;
        renderCurrentQuestion();
      });
    }
  }

  function skipQuestion() {
    if (state.currentQuestionIndex < surveyQuestions.length - 1) {
      transitionQuestion('next', () => {
        state.currentQuestionIndex++;
        renderCurrentQuestion();
      });
    }
  }

  function transitionQuestion(direction, callback) {
    const container = document.getElementById('feedbackQuestionContainer');
    const question = container.querySelector('.feedback-question');

    if (question) {
      question.style.transition = 'all 0.3s ease';
      question.style.opacity = '0';
      question.style.transform = direction === 'next' ? 'translateX(-30px)' : 'translateX(30px)';

      setTimeout(() => {
        callback();
        const newQuestion = container.querySelector('.feedback-question');
        if (newQuestion) {
          newQuestion.style.opacity = '0';
          newQuestion.style.transform = direction === 'next' ? 'translateX(30px)' : 'translateX(-30px)';
          requestAnimationFrame(() => {
            newQuestion.style.transition = 'all 0.3s ease';
            newQuestion.style.opacity = '1';
            newQuestion.style.transform = 'translateX(0)';
          });
        }
      }, 300);
    } else {
      callback();
    }
  }

  function showValidationError(message) {
    const container = document.getElementById('feedbackQuestionContainer');
    const existingError = container.querySelector('.validation-error');

    if (existingError) {
      existingError.remove();
    }

    const error = document.createElement('div');
    error.className = 'validation-error animate-shake';
    error.textContent = message;
    container.appendChild(error);

    setTimeout(() => error.remove(), 3000);
  }

  function submitSurvey() {
    // Validate final required question
    const currentQuestion = surveyQuestions[state.currentQuestionIndex];
    if (currentQuestion.required) {
      const response = state.currentSurveyResponses[currentQuestion.id];
      if (response === undefined || response === null || response === '' ||
          (Array.isArray(response) && response.length === 0)) {
        showValidationError('Please answer this question before submitting.');
        return;
      }
    }

    // Create feedback entry
    const feedbackEntry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      duration: Date.now() - state.surveyStartTime,
      responses: { ...state.currentSurveyResponses },
      metadata: {
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`,
        theme: document.documentElement.dataset.theme || 'auto'
      }
    };

    // Save feedback
    state.feedbackHistory.push(feedbackEntry);
    saveState();

    // Try to sync with Firebase if available
    syncFeedbackToFirebase(feedbackEntry);

    // Show thank you message
    showThankYou();
  }

  function syncFeedbackToFirebase(feedbackEntry) {
    // Check if Firebase is available
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      try {
        firebase.firestore().collection('feedback').add(feedbackEntry)
          .then(() => console.log('Feedback synced to Firebase'))
          .catch(err => console.warn('Could not sync feedback:', err));
      } catch (e) {
        console.warn('Firebase sync failed:', e);
      }
    }
  }

  function showThankYou() {
    const container = document.getElementById('feedbackQuestionContainer');
    const actions = document.querySelector('.feedback-actions');
    const progress = document.querySelector('.feedback-progress');
    const header = document.querySelector('.feedback-header');
    const feedbackCard = document.getElementById('feedback');

    if (progress) progress.classList.add('hidden');
    if (actions) actions.classList.add('hidden');
    if (header) header.classList.add('hidden');
    if (feedbackCard) feedbackCard.classList.add('feedback-success-mode');

    // Calculate some stats
    const completionTime = Math.round((Date.now() - state.surveyStartTime) / 1000);
    const answeredCount = Object.keys(state.currentSurveyResponses).length;
    const avgRating = calculateAverageRating();

    container.innerHTML = `
      <div class="feedback-thank-you">
        <div class="confetti-container" id="confettiContainer"></div>

        <div class="thank-you-hero">
          <div class="thank-you-badge">
            <div class="badge-ring badge-ring-1"></div>
            <div class="badge-ring badge-ring-2"></div>
            <div class="badge-ring badge-ring-3"></div>
            <div class="badge-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          <h2 class="thank-you-title">You're Amazing!</h2>
          <p class="thank-you-subtitle">Your feedback helps thousands of students succeed in their WAEC exams.</p>
        </div>

        <div class="feedback-impact-card">
          <div class="impact-header">
            <span class="impact-icon">✨</span>
            <span>Your Impact</span>
          </div>
          <div class="impact-stats">
            <div class="impact-stat">
              <div class="impact-stat__circle">
                <svg class="impact-stat__ring" viewBox="0 0 36 36">
                  <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="ring-fill" stroke-dasharray="${answeredCount * 10}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <span class="impact-stat__value">${answeredCount}</span>
              </div>
              <span class="impact-stat__label">Answered</span>
            </div>
            <div class="impact-stat">
              <div class="impact-stat__circle">
                <svg class="impact-stat__ring" viewBox="0 0 36 36">
                  <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                  <path class="ring-fill time-ring" stroke-dasharray="${Math.min(completionTime, 100)}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                </svg>
                <span class="impact-stat__value">${completionTime}s</span>
              </div>
              <span class="impact-stat__label">Time</span>
            </div>
            <div class="impact-stat">
              <div class="impact-stat__circle rating-circle">
                <span class="impact-stat__value rating-value">${avgRating}</span>
                <span class="rating-star">★</span>
              </div>
              <span class="impact-stat__label">Avg Rating</span>
            </div>
          </div>
        </div>

        <div class="feedback-cta-section">
          <button class="feedback-cta-btn" onclick="FeedbackEngine.closeSurvey()">
            <span class="cta-text">Continue Learning</span>
            <span class="cta-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
          <p class="cta-subtext">Your feedback has been saved securely</p>
        </div>
      </div>
    `;

    // Trigger confetti and animations
    setTimeout(() => launchConfetti(), 300);
    animateThankYouElements();
  }

  function calculateAverageRating() {
    const ratings = ['overall_satisfaction', 'ease_of_use', 'app_speed', 'design_rating'];
    let sum = 0;
    let count = 0;
    ratings.forEach(key => {
      if (state.currentSurveyResponses[key]) {
        sum += state.currentSurveyResponses[key];
        count++;
      }
    });
    return count > 0 ? (sum / count).toFixed(1) : '—';
  }

  function animateThankYouElements() {
    const elements = document.querySelectorAll('.thank-you-hero, .feedback-impact-card, .feedback-cta-section');
    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + (i * 150));
    });
  }

  function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;

    const colors = ['#667eea', '#764ba2', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'];
    const confettiCount = 80;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.setProperty('--x', `${Math.random() * 100}%`);
      confetti.style.setProperty('--rotation', `${Math.random() * 360}deg`);
      confetti.style.setProperty('--delay', `${Math.random() * 0.5}s`);
      confetti.style.setProperty('--duration', `${2 + Math.random() * 2}s`);
      confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      confetti.style.setProperty('--size', `${6 + Math.random() * 8}px`);
      container.appendChild(confetti);
    }

    // Clean up after animation
    setTimeout(() => {
      container.innerHTML = '';
    }, 5000);
  }

  function generateFeedbackSummary() {
    const summaryItems = [];

    if (state.currentSurveyResponses.overall_satisfaction) {
      summaryItems.push(`<li>Overall Satisfaction: ${'⭐'.repeat(state.currentSurveyResponses.overall_satisfaction)}</li>`);
    }
    if (state.currentSurveyResponses.ease_of_use) {
      summaryItems.push(`<li>Ease of Use: ${'⭐'.repeat(state.currentSurveyResponses.ease_of_use)}</li>`);
    }
    if (state.currentSurveyResponses.recommendation !== undefined) {
      summaryItems.push(`<li>Recommendation Score: ${state.currentSurveyResponses.recommendation}/10</li>`);
    }

    return summaryItems.length > 0
      ? `<ul>${summaryItems.join('')}</ul>`
      : '<p class="muted">No ratings provided</p>';
  }

  function closeSurvey() {
    const feedbackSection = document.getElementById('feedback');
    if (feedbackSection) {
      feedbackSection.classList.add('hidden');
    }

    // Show the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.classList.remove('hidden');
    }

    // Also show setup and dashboard
    document.getElementById('setup')?.classList.remove('hidden');
    document.getElementById('dashboard')?.classList.remove('hidden');
  }

  // Get feedback statistics
  function getStats() {
    if (state.feedbackHistory.length === 0) {
      return null;
    }

    const avgSatisfaction = state.feedbackHistory
      .filter(f => f.responses.overall_satisfaction)
      .reduce((sum, f) => sum + f.responses.overall_satisfaction, 0) /
      state.feedbackHistory.filter(f => f.responses.overall_satisfaction).length;

    const avgNPS = state.feedbackHistory
      .filter(f => f.responses.recommendation !== undefined)
      .reduce((sum, f) => sum + f.responses.recommendation, 0) /
      state.feedbackHistory.filter(f => f.responses.recommendation !== undefined).length;

    return {
      totalResponses: state.feedbackHistory.length,
      averageSatisfaction: avgSatisfaction.toFixed(1),
      averageNPS: avgNPS.toFixed(1),
      lastFeedback: state.feedbackHistory[state.feedbackHistory.length - 1]?.timestamp
    };
  }

  // Public API
  return {
    init,
    openSurvey,
    closeSurvey,
    getStats,
    showFeedbackPrompt
  };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', FeedbackEngine.init);
} else {
  FeedbackEngine.init();
}
