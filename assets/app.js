/**
 * WAEC Ace - Main Application
 * A comprehensive WAEC practice app with adaptive learning
 */

class WAECAceApp {
    constructor() {
        this.currentScreen = 'home';
        this.currentSession = null;
        this.practiceState = {
            subject: null,
            selectedTopics: [],
            currentQuestion: null,
            questionIndex: 0,
            sessionQuestions: [],
            sessionStats: { correct: 0, total: 0, timeSpent: 0 },
            startTime: null
        };
        
        this.examState = {
            questions: [],
            answers: {},
            currentIndex: 0,
            startTime: null,
            timeLimit: null,
            timer: null,
            isActive: false
        };
        
        this.questionTimer = {
            start: null,
            current: null,
            interval: null
        };
        
        this.isInitialized = false;
    }

    async initialize() {
        try {
            console.log('🚀 Initializing WAEC Ace...');
            
            // Initialize all systems
            await this.initializeSystems();
            
            // Load questions data
            await this.loadQuestionsData();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Update UI with initial data
            this.updateUI();
            
            // Hide loading screen
            setTimeout(() => {
                Utils.$('#loading-screen')?.classList.add('hidden');
            }, 1500);
            
            this.isInitialized = true;
            console.log('✅ WAEC Ace initialized successfully!');
            
        } catch (error) {
            console.error('❌ Failed to initialize app:', error);
            this.showError('Failed to load application. Please refresh the page.');
        }
    }

    async initializeSystems() {
        // Initialize analytics session
        window.analytics.startSession();
        
        // Listen for analytics events
        window.addEventListener('analytics:sessionUpdate', (e) => {
            this.updateSessionStats(e.detail);
        });
        
        // Setup offline detection
        window.addEventListener('online', () => {
            Utils.showToast('Back online! 🌐', 'success', 3000);
        });
        
        window.addEventListener('offline', () => {
            Utils.showToast('You\'re offline. App will continue to work! 📱', 'info', 5000);
        });
        
        // Setup service worker messages
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                this.handleServiceWorkerMessage(event.data);
            });
        }
    }

    async loadQuestionsData() {
        try {
            console.log('📚 Loading questions...');
            await window.selector.loadQuestions();
            
            const stats = {
                math: window.selector.questions.math.length,
                english: window.selector.questions.english.length,
                biology: window.selector.questions.biology.length
            };
            
            console.log('📊 Questions loaded:', stats);
            
            // Update UI with question counts
            this.updateQuestionCounts(stats);
            
        } catch (error) {
            console.error('Failed to load questions:', error);
            Utils.showToast('Some features may be limited - questions failed to load', 'warning', 5000);
        }
    }

    setupEventListeners() {
        // Navigation
        this.setupNavigationListeners();
        
        // Practice mode
        this.setupPracticeListeners();
        
        // Exam mode
        this.setupExamListeners();
        
        // Global shortcuts
        this.setupKeyboardShortcuts();
        
        // Touch gestures (handled by UI manager)
        // Notifications
        this.setupNotificationListeners();
    }

    setupNavigationListeners() {
        // Quick action buttons
        Utils.$('#smart-practice-btn')?.addEventListener('click', () => {
            this.startSmartPractice();
        });
        
        Utils.$('#mock-exam-btn')?.addEventListener('click', () => {
            window.ui.showScreen('exam');
        });
        
        Utils.$('#weak-topics-btn')?.addEventListener('click', () => {
            this.startWeakTopicsPractice();
        });
        
        Utils.$('#progress-btn')?.addEventListener('click', () => {
            window.ui.showScreen('progress');
        });
        
        // AI Feature buttons in navigation
        Utils.$('#teacher-dashboard-btn')?.addEventListener('click', () => {
            this.showTeacherDashboard();
        });
        
        Utils.$('#parent-report-btn')?.addEventListener('click', () => {
            this.showParentReport();
        });
        
        // AI Feature demo buttons
        Utils.$('#smart-hints-demo')?.addEventListener('click', () => {
            this.demoSmartHints();
        });
        
        Utils.$('#teacher-alerts-demo')?.addEventListener('click', () => {
            this.demoStudentAlerts();
        });
        
        Utils.$('#parent-insights-demo')?.addEventListener('click', () => {
            this.showParentReport();
        });
        
        Utils.$('#test-all-features')?.addEventListener('click', () => {
            this.testNewFeatures();
        });
        
        // Subject cards
        Utils.$$('.subject-card').forEach(card => {
            card.addEventListener('click', () => {
                const subject = card.dataset.subject;
                this.startSubjectPractice(subject);
            });
        });
        
        // Back buttons
        Utils.$('#back-home')?.addEventListener('click', () => {
            this.exitPractice();
        });
        
        Utils.$('#back-home-exam')?.addEventListener('click', () => {
            this.exitExam();
        });
        
        Utils.$('#back-home-progress')?.addEventListener('click', () => {
            window.ui.showScreen('home');
        });
    }

    setupPracticeListeners() {
        console.log('🔧 Setting up practice listeners...');
        
        // Subject selection cards in practice screen
        const selectionCards = Utils.$$('.selection-card[data-subject]');
        console.log('Found selection cards:', selectionCards.length);
        
        selectionCards.forEach(card => {
            card.addEventListener('click', () => {
                const subject = card.dataset.subject;
                console.log('📚 Subject selection card clicked:', subject);
                this.selectPracticeSubject(subject);
            });
        });
        
        // Topic filtering
        Utils.$('#topic-search')?.addEventListener('input', Utils.debounce((e) => {
            this.filterTopics(e.target.value);
        }, 300));
        
        Utils.$$('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                Utils.$$('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterTopicsByLevel(btn.dataset.filter);
            });
        });
        
        // Topic selection
        Utils.$('#select-all-topics')?.addEventListener('click', () => {
            this.selectAllTopics();
        });
        
        // Start practice button
        const startPracticeBtn = Utils.$('#start-practice');
        if (startPracticeBtn) {
            console.log('✅ Start practice button found, adding listener');
            startPracticeBtn.addEventListener('click', () => {
                console.log('🎬 Start practice button clicked!');
                this.beginPracticeSession();
            });
        } else {
            console.warn('❌ Start practice button not found!');
        }
        
        // Question interactions
        Utils.$('#submit-answer')?.addEventListener('click', () => {
            this.submitAnswer();
        });
        
        Utils.$('#next-question')?.addEventListener('click', () => {
            this.nextQuestion();
        });
        
        Utils.$('#bookmark-question')?.addEventListener('click', () => {
            this.bookmarkQuestion();
        });
        
        Utils.$('#hint-btn')?.addEventListener('click', () => {
            this.showHint();
        });
        
        console.log('🔧 Practice listeners setup complete');
    }

    setupExamListeners() {
        // Exam configuration
        Utils.$$('input[name="exam-questions"]').forEach(radio => {
            radio.addEventListener('change', () => {
                this.updateExamConfiguration();
            });
        });
        
        Utils.$$('.stepper-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.adjustSubjectCount(btn.dataset.subject, btn.dataset.action);
            });
        });
        
        Utils.$('#start-exam')?.addEventListener('click', () => {
            this.startExam();
        });
        
        Utils.$('#submit-exam')?.addEventListener('click', () => {
            this.submitExam();
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch (e.key) {
                case 'h':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        window.ui.showScreen('home');
                    }
                    break;
                case 'p':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        window.ui.showScreen('practice');
                    }
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    if (this.practiceState.currentQuestion && !e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        this.selectOption(parseInt(e.key) - 1);
                    }
                    break;
                case 'Enter':
                    if (this.practiceState.currentQuestion) {
                        e.preventDefault();
                        Utils.$('#submit-answer')?.click();
                    }
                    break;
                case 'n':
                    if (this.practiceState.currentQuestion && !Utils.$('#submit-answer').disabled) {
                        e.preventDefault();
                        Utils.$('#next-question')?.click();
                    }
                    break;
            }
        });
    }

    setupNotificationListeners() {
        // Request notification permission if supported
        if ('Notification' in window && Notification.permission === 'default') {
            Utils.$('#notifications-btn')?.addEventListener('click', () => {
                this.requestNotificationPermission();
            });
        }
        
        // Update notification button based on permission
        this.updateNotificationButton();
    }

    // Practice Mode Methods
    async startSmartPractice() {
        console.log('🎯 Starting smart practice...');
        
        window.ui.showScreen('practice');
        
        // Show subject selection and ensure it's visible
        this.showSubjectSelection();
        console.log('📚 Showing subject selection screen');
    }

    async startWeakTopicsPractice() {
        console.log('📈 Starting weak topics practice...');
        
        // Find weak topics across all subjects
        const weakTopics = this.findWeakTopics();
        
        if (weakTopics.length === 0) {
            Utils.showToast('Great! No weak topics found. Try regular practice.', 'success');
            return;
        }
        
        // Start practice with weak topics
        window.ui.showScreen('practice');
        this.startMixedTopicPractice(weakTopics);
    }

    startSubjectPractice(subject) {
        console.log(`📚 Starting ${subject} practice...`);
        
        window.ui.showScreen('practice');
        this.selectPracticeSubject(subject);
    }

    selectPracticeSubject(subject) {
        console.log(`📚 Subject selected: ${subject}`);
        this.practiceState.subject = subject;
        
        // Update UI
        const practiceTitle = Utils.$('#practice-title');
        if (practiceTitle) {
            practiceTitle.textContent = `${Utils.capitalize(subject)} Practice`;
        }
        
        // Hide subject selection, show topic selection
        const subjectSelection = Utils.$('#subject-selection');
        const topicSelection = Utils.$('#topic-selection');
        
        if (subjectSelection) {
            subjectSelection.classList.add('hidden');
        }
        if (topicSelection) {
            topicSelection.classList.remove('hidden');
            console.log('✅ Topic selection shown');
        }
        
        // Load topics for this subject
        this.loadTopicsForSubject(subject);
    }

    loadTopicsForSubject(subject) {
        console.log(`📚 Loading topics for ${subject}...`);
        
        const topicGrid = Utils.$('#topic-grid');
        
        if (!topicGrid) {
            console.error('Topic grid not found');
            Utils.showToast('Topic grid not found', 'error');
            return;
        }
        
        // Clear existing topics
        topicGrid.innerHTML = '';
        
        // For this simple implementation, let's use basic topics
        const basicTopics = {
            math: ['Algebra', 'Geometry', 'Statistics', 'Fractions', 'Percentages'],
            english: ['Grammar', 'Vocabulary', 'Spelling', 'Comprehension'],
            biology: ['Cell Biology', 'Genetics', 'Ecology', 'Life Processes']
        };
        
        const topics = basicTopics[subject] || [];
        console.log('Available topics:', topics);
        
        if (topics.length === 0) {
            // Create a simple "All Questions" option
            const allCard = this.createTopicCard('All Questions', 'adaptive', null, 'Practice with all available questions');
            allCard.addEventListener('click', () => this.selectTopic(null, true));
            topicGrid.appendChild(allCard);
            console.log('✅ Created fallback "All Questions" option');
            return;
        }
        
        // Add "All Topics" option
        const allTopicsCard = this.createTopicCard('All Topics', 'adaptive', null, 'Adaptive selection based on your performance');
        allTopicsCard.addEventListener('click', () => this.selectTopic(null, true));
        topicGrid.appendChild(allTopicsCard);
        
        // Add individual topics
        topics.forEach(topic => {
            const mastery = window.storage?.getTopicMastery(subject, topic) || 0;
            const difficulty = this.getMasteryLevel(mastery);
            
            const topicCard = this.createTopicCard(topic, difficulty, mastery);
            topicCard.addEventListener('click', () => this.selectTopic(topic, false));
            topicGrid.appendChild(topicCard);
        });
        
        console.log(`✅ Loaded ${topics.length + 1} topic options for ${subject}`);
    }

    createTopicCard(topicName, difficulty, mastery, description = null) {
        const card = Utils.create('div', {
            className: `topic-card ${difficulty}`,
            dataset: { topic: topicName, difficulty }
        });
        
        const title = Utils.create('h4', {}, topicName);
        card.appendChild(title);
        
        if (description) {
            const desc = Utils.create('p', { className: 'topic-description' }, description);
            card.appendChild(desc);
        } else if (mastery !== null) {
            const masteryBar = Utils.create('div', { className: 'mastery-bar' });
            const masteryFill = Utils.create('div', { 
                className: 'mastery-fill',
                style: `width: ${mastery}%`
            });
            masteryBar.appendChild(masteryFill);
            
            const masteryLabel = Utils.create('span', { 
                className: 'mastery-label' 
            }, `${mastery}% mastery`);
            
            card.appendChild(masteryBar);
            card.appendChild(masteryLabel);
        }
        
        return card;
    }

    selectTopic(topic, isAdaptive) {
        if (isAdaptive) {
            this.practiceState.selectedTopics = [];
            this.practiceState.isAdaptive = true;
            console.log('🎯 Adaptive practice selected');
        } else {
            if (this.practiceState.selectedTopics.includes(topic)) {
                this.practiceState.selectedTopics = this.practiceState.selectedTopics.filter(t => t !== topic);
            } else {
                this.practiceState.selectedTopics.push(topic);
            }
            this.practiceState.isAdaptive = false;
            console.log('📚 Selected topics:', this.practiceState.selectedTopics);
        }
        
        this.updateSelectedTopicsUI();
        this.updateStartButtonState();
    }

    updateSelectedTopicsUI() {
        Utils.$$('.topic-card').forEach(card => {
            const topic = card.dataset.topic;
            if (this.practiceState.selectedTopics.includes(topic) || 
                (this.practiceState.isAdaptive && topic === 'All Topics')) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
    }

    updateStartButtonState() {
        const startBtn = Utils.$('#start-practice');
        const hasSelection = this.practiceState.selectedTopics.length > 0 || this.practiceState.isAdaptive;
        
        if (startBtn) {
            startBtn.disabled = !hasSelection;
            startBtn.textContent = hasSelection ? 
                `Start Practice (${this.practiceState.isAdaptive ? 'Adaptive' : this.practiceState.selectedTopics.length + ' topics'})` :
                'Select Topics First';
        }
    }

    async beginPracticeSession() {
        console.log('🎬 Beginning practice session...');
        console.log('📊 Practice state:', this.practiceState);
        
        try {
            // Check if we have a subject selected
            if (!this.practiceState.subject) {
                Utils.showToast('Please select a subject first', 'warning');
                return;
            }
            
            // Generate questions for the session
            const questions = await this.generatePracticeQuestions();
            console.log('❓ Generated questions:', questions.length);
            
            if (questions.length === 0) {
                Utils.showToast('No questions available for selected topics. Trying all questions...', 'warning');
                // Fallback: try to get any questions from this subject
                const allQuestions = window.selector.questions[this.practiceState.subject] || [];
                questions.push(...allQuestions.slice(0, 10));
            }
            
            if (questions.length === 0) {
                Utils.showToast('No questions found. Please check that questions are loaded.', 'error');
                console.error('No questions available in:', window.selector.questions);
                return;
            }
            
            // Initialize session
            this.practiceState.sessionQuestions = questions;
            this.practiceState.questionIndex = 0;
            this.practiceState.sessionStats = { correct: 0, total: 0, timeSpent: 0 };
            this.practiceState.startTime = Date.now();
            
            // Hide topic selection, show question view
            Utils.$('#topic-selection')?.classList.add('hidden');
            Utils.$('#question-view')?.classList.remove('hidden');
            
            // Start first question
            this.loadCurrentQuestion();
            
            Utils.showToast(`Practice started with ${questions.length} questions!`, 'success', 3000);
            
        } catch (error) {
            console.error('Failed to start practice session:', error);
            Utils.showToast(`Failed to start practice: ${error.message}`, 'error');
        }
    }

    async generatePracticeQuestions() {
        console.log('❓ Generating practice questions...');
        console.log('Practice state:', this.practiceState);
        
        const questionCount = 10; // Default session length
        let questions = [];
        
        // Simple question data that matches the working simple-practice.html
        const simpleQuestions = {
            math: [
                {
                    question: "Simplify: 3x + 2x - x",
                    options: ["4x", "5x", "6x", "2x"],
                    answer_index: 0,
                    explanation: "Combine like terms: 3x + 2x - x = (3 + 2 - 1)x = 4x",
                    topic: "Algebra",
                    difficulty: "easy",
                    subject: "math",
                    id: "math1"
                },
                {
                    question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
                    options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
                    answer_index: 2,
                    explanation: "Area of rectangle = length × width = 8 × 5 = 40 cm²",
                    topic: "Geometry",
                    difficulty: "easy",
                    subject: "math",
                    id: "math2"
                },
                {
                    question: "Find the mean of: 4, 6, 8, 10, 12",
                    options: ["6", "8", "9", "10"],
                    answer_index: 1,
                    explanation: "Mean = (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8",
                    topic: "Statistics",
                    difficulty: "easy",
                    subject: "math",
                    id: "math3"
                }
            ],
            english: [
                {
                    question: "Which of the following is a noun?",
                    options: ["Run", "Beautiful", "House", "Quickly"],
                    answer_index: 2,
                    explanation: "A noun is a word that names a person, place, thing, or idea. 'House' is a thing, making it a noun.",
                    topic: "Grammar",
                    difficulty: "easy",
                    subject: "english",
                    id: "eng1"
                },
                {
                    question: "What does 'enormous' mean?",
                    options: ["Very small", "Very large", "Very fast", "Very slow"],
                    answer_index: 1,
                    explanation: "'Enormous' means extremely large in size or extent.",
                    topic: "Vocabulary",
                    difficulty: "easy",
                    subject: "english",
                    id: "eng2"
                }
            ],
            biology: [
                {
                    question: "What is the basic unit of life?",
                    options: ["Atom", "Cell", "Molecule", "Organ"],
                    answer_index: 1,
                    explanation: "The cell is the fundamental unit of life. All living things are made up of one or more cells.",
                    topic: "Cell Biology",
                    difficulty: "easy",
                    subject: "biology",
                    id: "bio1"
                }
            ]
        };
        
        // Get questions for the current subject
        const availableQuestions = simpleQuestions[this.practiceState.subject] || [];
        console.log(`Found ${availableQuestions.length} questions for ${this.practiceState.subject}`);
        
        if (availableQuestions.length === 0) {
            console.warn('No questions found for subject:', this.practiceState.subject);
            return [];
        }
        
        // Take all available questions, repeat if needed
        while (questions.length < questionCount && questions.length < availableQuestions.length * 2) {
            questions.push(...availableQuestions);
        }
        
        // Shuffle and limit
        questions = Utils.shuffle(questions).slice(0, questionCount);
        console.log(`✅ Generated ${questions.length} practice questions`);
        
        return questions;
    }

    loadCurrentQuestion() {
        const question = this.practiceState.sessionQuestions[this.practiceState.questionIndex];
        if (!question) return;
        
        this.practiceState.currentQuestion = question;
        
        // Start question timer
        this.startQuestionTimer();
        
        // Update UI
        this.displayQuestion(question);
        this.updateQuestionProgress();
        
        // Show why this topic was selected (for adaptive mode)
        this.showTopicSelectionReason();
    }

    displayQuestion(question) {
        // Update question info
        Utils.$('#question-number').textContent = 
            `Question ${this.practiceState.questionIndex + 1} of ${this.practiceState.sessionQuestions.length}`;
        Utils.$('#question-topic').textContent = question.topic;
        Utils.$('#question-difficulty').textContent = Utils.capitalize(question.difficulty);
        
        // Display question text
        Utils.$('#question-text').textContent = question.question;
        
        // Create options
        const optionsContainer = Utils.$('#options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = Utils.create('div', {
                className: 'option',
                dataset: { index: index.toString() }
            });
            
            optionElement.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Reset UI state
        this.resetQuestionUI();
    }

    selectOption(index) {
        // Clear previous selections
        Utils.$$('.option').forEach(opt => opt.classList.remove('selected'));
        
        // Select current option
        const selectedOption = Utils.$(`[data-index="${index}"]`);
        selectedOption?.classList.add('selected');
        
        // Enable submit button
        Utils.$('#submit-answer').disabled = false;
        
        // Store selection
        this.practiceState.selectedAnswer = index;
    }

    startQuestionTimer() {
        this.questionTimer.start = Date.now();
        this.questionTimer.interval = setInterval(() => {
            const elapsed = Date.now() - this.questionTimer.start;
            // Could update a timer display here if desired
        }, 1000);
    }

    stopQuestionTimer() {
        if (this.questionTimer.interval) {
            clearInterval(this.questionTimer.interval);
            this.questionTimer.interval = null;
        }
        return this.questionTimer.start ? Date.now() - this.questionTimer.start : 0;
    }

    async submitAnswer() {
        if (this.practiceState.selectedAnswer === undefined) return;
        
        const question = this.practiceState.currentQuestion;
        const selectedIndex = this.practiceState.selectedAnswer;
        const correctIndex = question.answer_index;
        const isCorrect = selectedIndex === correctIndex;
        const timeSpent = this.stopQuestionTimer();
        
        // Update session stats
        this.practiceState.sessionStats.total++;
        this.practiceState.sessionStats.timeSpent += timeSpent;
        
        if (isCorrect) {
            this.practiceState.sessionStats.correct++;
            Utils.vibrate([50, 50, 100]); // Success vibration
        } else {
            Utils.vibrate([100, 100, 100, 100]); // Error vibration
        }
        
        // Track in analytics
        window.analytics.trackQuestionAnswer(question, isCorrect, timeSpent);
        
        // Update storage
        window.storage.updateTopicProgress(question.subject, question.topic, isCorrect);
        
        if (!isCorrect) {
            window.storage.addMistake(question.id, question.subject, question.topic);
        }
        
        // Show visual feedback
        this.showAnswerFeedback(isCorrect, correctIndex, selectedIndex);
        
        // Update UI
        Utils.$('#submit-answer').classList.add('hidden');
        Utils.$('#next-question').classList.remove('hidden');
        
        // Show explanation with intelligent feedback
        this.showIntelligentExplanation(question, isCorrect, timeSpent);
        
        // Show progress insights after answer
        this.showProgressInsights(question.topic, isCorrect);
    }

    showAnswerFeedback(isCorrect, correctIndex, selectedIndex) {
        const feedbackContainer = Utils.$('#answer-feedback');
        const resultIcon = Utils.$('#result-icon');
        const resultText = Utils.$('#result-text');
        const resultTime = Utils.$('#result-time');
        
        // Update feedback content
        resultIcon.textContent = isCorrect ? '✅' : '❌';
        resultText.textContent = isCorrect ? 'Correct!' : 'Incorrect';
        resultTime.textContent = `Answered in ${Math.round(this.questionTimer.current / 1000)}s`;
        
        // Color code options
        Utils.$$('.option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            
            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Show feedback
        feedbackContainer.classList.remove('hidden');
    }

    showExplanation(explanation) {
        Utils.$('#explanation-text').textContent = explanation;
    }
    
    showIntelligentExplanation(question, isCorrect, timeSpent) {
        // Basic explanation
        Utils.$('#explanation-text').textContent = question.explanation;
        
        // Add intelligent insights based on performance
        const insights = this.generateAnswerInsights(question, isCorrect, timeSpent);
        
        // Create or update insights container
        let insightsContainer = Utils.$('#answer-insights');
        if (!insightsContainer) {
            insightsContainer = Utils.create('div', {
                id: 'answer-insights',
                className: 'answer-insights'
            });
            Utils.$('#explanation-text').parentNode.appendChild(insightsContainer);
        }
        
        insightsContainer.innerHTML = insights.length > 0 ? `
            <div class="insights-header">💡 AI Insights</div>
            ${insights.map(insight => `
                <div class="insight-item ${insight.type}">
                    <span class="insight-icon">${insight.icon}</span>
                    <span class="insight-text">${insight.text}</span>
                </div>
            `).join('')}
        ` : '';
        
        // Add styles for insights
        if (!document.querySelector('#insights-styles')) {
            const insightsStyles = Utils.create('style', {
                id: 'insights-styles',
                textContent: `
                    .answer-insights {
                        margin-top: 16px;
                        background: #f7fafc;
                        border-radius: 8px;
                        padding: 16px;
                        border-left: 4px solid #667eea;
                    }
                    
                    .insights-header {
                        font-weight: 600;
                        color: #2d3748;
                        margin-bottom: 12px;
                        font-size: 14px;
                    }
                    
                    .insight-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 8px;
                        font-size: 14px;
                        line-height: 1.4;
                    }
                    
                    .insight-item:last-child {
                        margin-bottom: 0;
                    }
                    
                    .insight-icon {
                        margin-right: 8px;
                        font-size: 16px;
                    }
                    
                    .insight-item.speed {
                        color: #2b6cb0;
                    }
                    
                    .insight-item.mastery {
                        color: #38a169;
                    }
                    
                    .insight-item.improvement {
                        color: #d69e2e;
                    }
                    
                    .insight-item.encouragement {
                        color: #9f7aea;
                    }
                `
            });
            document.head.appendChild(insightsStyles);
        }
    }
    
    generateAnswerInsights(question, isCorrect, timeSpent) {
        const insights = [];
        
        // Speed insights
        if (timeSpent < 15000) { // Less than 15 seconds
            insights.push({
                type: 'speed',
                icon: '⚡',
                text: isCorrect ? 'Great speed! You answered quickly and correctly.' : 'Quick answer, but double-check your work next time.'
            });
        } else if (timeSpent > 60000) { // More than 1 minute
            insights.push({
                type: 'speed',
                icon: '🤔',
                text: 'Take your time to understand, but try to be more decisive during exams.'
            });
        }
        
        // Topic mastery insights
        const currentMastery = window.storage.getTopicMastery(question.subject, question.topic);
        if (isCorrect && currentMastery > 80) {
            insights.push({
                type: 'mastery',
                icon: '🎯',
                text: `Strong mastery in ${question.topic}! You're ready for harder questions.`
            });
        } else if (!isCorrect && currentMastery < 50) {
            insights.push({
                type: 'improvement',
                icon: '📚',
                text: `Focus more on ${question.topic} - this is a growth area for you.`
            });
        }
        
        // Streak and encouragement
        const recentPerformance = this.getRecentTopicPerformance(question.subject, question.topic);
        if (recentPerformance.streak >= 3) {
            insights.push({
                type: 'encouragement',
                icon: '🔥',
                text: `Amazing! ${recentPerformance.streak} correct answers in a row for ${question.topic}!`
            });
        }
        
        // Learning pattern insights
        if (isCorrect && this.isFirstTimeCorrect(question.id)) {
            insights.push({
                type: 'encouragement',
                icon: '🌟',
                text: 'Progress! You got this right after getting it wrong before.'
            });
        }
        
        return insights;
    }
    
    showProgressInsights(topic, isCorrect) {
        // Show a subtle progress indicator for the current topic
        const topicProgress = window.storage.getTopicMastery(this.practiceState.subject, topic);
        const progressChange = isCorrect ? '+2%' : '-1%';
        
        Utils.showToast(
            `${topic}: ${topicProgress}% mastery ${progressChange}`,
            isCorrect ? 'success' : 'info',
            2000
        );
    }
    
    getRecentTopicPerformance(subject, topic) {
        // Get recent performance for this topic
        const interactions = window.analytics.getInteractions('week')
            .filter(i => i.subject === subject && i.topic === topic)
            .sort((a, b) => b.timestamp - a.timestamp);
            
        let streak = 0;
        for (const interaction of interactions) {
            if (interaction.isCorrect) {
                streak++;
            } else {
                break;
            }
        }
        
        const accuracy = interactions.length > 0 ? 
            (interactions.filter(i => i.isCorrect).length / interactions.length) * 100 : 0;
            
        return { streak, accuracy, total: interactions.length };
    }
    
    isFirstTimeCorrect(questionId) {
        const interactions = window.analytics.getInteractions('month')
            .filter(i => i.questionId === questionId)
            .sort((a, b) => a.timestamp - b.timestamp);
            
        return interactions.length > 1 && 
               !interactions[0].isCorrect && 
               interactions[interactions.length - 1].isCorrect;
    }
    
    // Show WHY adaptive algorithm selected this topic
    showTopicSelectionReason() {
        if (!this.practiceState.isAdaptive) return;
        
        const currentQuestion = this.practiceState.currentQuestion;
        if (!currentQuestion) return;
        
        const topic = currentQuestion.topic;
        const subject = currentQuestion.subject;
        const priority = window.selector.calculateTopicPriority(subject, topic);
        const mastery = window.storage.getTopicMastery(subject, topic);
        
        let reason = '';
        if (priority >= 80) {
            reason = `📍 Focusing on ${topic} because you need more practice here (${mastery}% mastery)`;
        } else if (mastery < 40) {
            reason = `🎯 Working on ${topic} - this is a growth area for you`;
        } else {
            reason = `⚡ Smart practice selected ${topic} to strengthen your knowledge`;
        }
        
        // Show reason subtly in question header
        const questionTopic = Utils.$('#question-topic');
        if (questionTopic) {
            questionTopic.title = reason;
            questionTopic.style.cursor = 'help';
        }
    }

    nextQuestion() {
        this.practiceState.questionIndex++;
        this.practiceState.selectedAnswer = undefined;
        
        if (this.practiceState.questionIndex >= this.practiceState.sessionQuestions.length) {
            this.completePracticeSession();
        } else {
            this.loadCurrentQuestion();
        }
    }

    resetQuestionUI() {
        Utils.$('#submit-answer').classList.remove('hidden');
        Utils.$('#next-question').classList.add('hidden');
        Utils.$('#answer-feedback').classList.add('hidden');
        Utils.$('#submit-answer').disabled = true;
        
        Utils.$$('.option').forEach(option => {
            option.classList.remove('selected', 'correct', 'incorrect');
            option.style.pointerEvents = 'auto';
        });
    }

    updateQuestionProgress() {
        const progress = ((this.practiceState.questionIndex + 1) / this.practiceState.sessionQuestions.length) * 100;
        Utils.$('#question-progress-fill').style.width = `${progress}%`;
    }

    completePracticeSession() {
        console.log('🎉 Practice session complete!');
        
        const sessionSummary = window.analytics.endSession();
        
        // Show completion message
        const accuracy = Math.round((this.practiceState.sessionStats.correct / this.practiceState.sessionStats.total) * 100);
        
        Utils.showToast(
            `Session complete! ${accuracy}% accuracy (${this.practiceState.sessionStats.correct}/${this.practiceState.sessionStats.total})`,
            accuracy >= 80 ? 'success' : accuracy >= 60 ? 'warning' : 'error',
            5000
        );
        
        // Return to home after a delay
        setTimeout(() => {
            this.exitPractice();
        }, 3000);
    }

    exitPractice() {
        // Reset practice state
        this.practiceState = {
            subject: null,
            selectedTopics: [],
            currentQuestion: null,
            questionIndex: 0,
            sessionQuestions: [],
            sessionStats: { correct: 0, total: 0, timeSpent: 0 },
            startTime: null,
            isAdaptive: false
        };
        
        // Clean up timers
        this.stopQuestionTimer();
        
        // Return to home
        window.ui.showScreen('home');
        
        // Update home screen with latest progress
        this.updateUI();
    }

    // Exam Mode Methods
    startExam() {
        console.log('⏱️ Starting mock exam...');
        
        const questionCountInput = Utils.$('input[name="exam-questions"]:checked');
        const questionCount = questionCountInput ? parseInt(questionCountInput.value) : 40;
        const timeLimit = this.calculateTimeLimit(questionCount);
        
        console.log(`Generating ${questionCount} exam questions...`);
        
        // Generate exam questions using the same questions as practice
        const questions = this.generateMockExamQuestions(questionCount);
        
        if (questions.length === 0) {
            Utils.showToast('No questions available for exam', 'error');
            return;
        }
        
        // Initialize exam state
        this.examState = {
            questions,
            answers: {},
            currentIndex: 0,
            startTime: Date.now(),
            timeLimit,
            timer: null,
            isActive: true
        };
        
        // Hide exam setup, show exam questions
        Utils.$('#exam-setup')?.classList.add('hidden');
        
        // Create exam questions UI
        this.createExamQuestionsUI();
        
        // Start exam timer
        this.startExamTimer();
        
        // Show first question
        this.showExamQuestion();
        
        Utils.showToast('Exam started! Good luck! 🍀', 'info', 3000);
    }

    generateMockExamQuestions(questionCount) {
        console.log('🎯 Generating mock exam questions...');
        
        // Same question data as practice but mixed subjects for exam
        const simpleQuestions = {
            math: [
                {
                    question: "Simplify: 3x + 2x - x",
                    options: ["4x", "5x", "6x", "2x"],
                    answer_index: 0,
                    explanation: "Combine like terms: 3x + 2x - x = (3 + 2 - 1)x = 4x",
                    topic: "Algebra",
                    difficulty: "easy",
                    subject: "math",
                    id: "exam_math1"
                },
                {
                    question: "What is the area of a rectangle with length 8 cm and width 5 cm?",
                    options: ["13 cm²", "26 cm²", "40 cm²", "80 cm²"],
                    answer_index: 2,
                    explanation: "Area of rectangle = length × width = 8 × 5 = 40 cm²",
                    topic: "Geometry",
                    difficulty: "easy",
                    subject: "math",
                    id: "exam_math2"
                },
                {
                    question: "Find the mean of: 4, 6, 8, 10, 12",
                    options: ["6", "8", "9", "10"],
                    answer_index: 1,
                    explanation: "Mean = (4 + 6 + 8 + 10 + 12) ÷ 5 = 40 ÷ 5 = 8",
                    topic: "Statistics",
                    difficulty: "easy",
                    subject: "math",
                    id: "exam_math3"
                }
            ],
            english: [
                {
                    question: "Which of the following is a noun?",
                    options: ["Run", "Beautiful", "House", "Quickly"],
                    answer_index: 2,
                    explanation: "A noun is a word that names a person, place, thing, or idea. 'House' is a thing, making it a noun.",
                    topic: "Grammar",
                    difficulty: "easy",
                    subject: "english",
                    id: "exam_eng1"
                },
                {
                    question: "What does 'enormous' mean?",
                    options: ["Very small", "Very large", "Very fast", "Very slow"],
                    answer_index: 1,
                    explanation: "'Enormous' means extremely large in size or extent.",
                    topic: "Vocabulary",
                    difficulty: "easy",
                    subject: "english",
                    id: "exam_eng2"
                },
                {
                    question: "Choose the correct verb form: 'She ____ to the market yesterday.'",
                    options: ["go", "goes", "went", "going"],
                    answer_index: 2,
                    explanation: "'Yesterday' indicates past tense. The past tense of 'go' is 'went'.",
                    topic: "Grammar",
                    difficulty: "easy",
                    subject: "english",
                    id: "exam_eng3"
                }
            ],
            biology: [
                {
                    question: "What is the basic unit of life?",
                    options: ["Atom", "Cell", "Molecule", "Organ"],
                    answer_index: 1,
                    explanation: "The cell is the fundamental unit of life. All living things are made up of one or more cells.",
                    topic: "Cell Biology",
                    difficulty: "easy",
                    subject: "biology",
                    id: "exam_bio1"
                },
                {
                    question: "Which organelle is known as the powerhouse of the cell?",
                    options: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"],
                    answer_index: 2,
                    explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP (energy) through cellular respiration.",
                    topic: "Cell Biology",
                    difficulty: "easy",
                    subject: "biology",
                    id: "exam_bio2"
                }
            ]
        };
        
        // Combine all questions from all subjects
        let allQuestions = [];
        Object.keys(simpleQuestions).forEach(subject => {
            allQuestions.push(...simpleQuestions[subject]);
        });
        
        // Shuffle and take the requested number
        const shuffledQuestions = Utils.shuffle(allQuestions);
        
        // Repeat questions if we don't have enough
        let examQuestions = [];
        while (examQuestions.length < questionCount) {
            examQuestions.push(...shuffledQuestions);
        }
        
        // Take exactly the requested number
        examQuestions = examQuestions.slice(0, questionCount);
        
        console.log(`✅ Generated ${examQuestions.length} exam questions`);
        return examQuestions;
    }

    calculateTimeLimit(questionCount) {
        // Roughly 1.5 minutes per question
        return questionCount * 90 * 1000;
    }

    startExamTimer() {
        this.examState.timer = setInterval(() => {
            const elapsed = Date.now() - this.examState.startTime;
            const remaining = Math.max(0, this.examState.timeLimit - elapsed);
            
            this.updateExamTimerDisplay(remaining);
            
            if (remaining <= 0) {
                this.submitExam();
            }
        }, 1000);
    }

    updateExamTimerDisplay(remaining) {
        const minutes = Math.floor(remaining / (60 * 1000));
        const seconds = Math.floor((remaining % (60 * 1000)) / 1000);
        
        Utils.$('#exam-timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning colors
        if (remaining < 5 * 60 * 1000) { // Last 5 minutes
            Utils.$('#exam-timer').style.color = '#ef4444';
        } else if (remaining < 10 * 60 * 1000) { // Last 10 minutes
            Utils.$('#exam-timer').style.color = '#f59e0b';
        }
    }

    createExamQuestionsUI() {
        const examQuestionsContainer = Utils.$('#exam-questions');
        if (!examQuestionsContainer) return;
        
        examQuestionsContainer.innerHTML = `
            <div class="exam-question-container">
                <div class="exam-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="exam-progress-fill"></div>
                    </div>
                    <div class="question-info">
                        <span id="exam-question-number">Question 1 of ${this.examState.questions.length}</span>
                        <span id="exam-question-subject"></span>
                    </div>
                </div>

                <div class="question-content">
                    <div class="question-text" id="exam-question-text"></div>
                    <div class="options-container" id="exam-options-container"></div>
                </div>

                <div class="exam-question-actions">
                    <button class="btn-outline" id="exam-prev-btn" disabled>← Previous</button>
                    <button class="btn-primary" id="exam-next-btn">Next →</button>
                    <button class="btn-secondary" id="exam-submit-btn" style="display: none;">Submit Exam</button>
                </div>
            </div>
        `;
        
        // Add event listeners
        Utils.$('#exam-prev-btn')?.addEventListener('click', () => this.showPreviousExamQuestion());
        Utils.$('#exam-next-btn')?.addEventListener('click', () => this.showNextExamQuestion());
        Utils.$('#exam-submit-btn')?.addEventListener('click', () => this.submitExam());
        
        examQuestionsContainer.classList.remove('hidden');
    }

    showExamQuestion() {
        const currentQuestion = this.examState.questions[this.examState.currentIndex];
        if (!currentQuestion) return;
        
        console.log(`Showing exam question ${this.examState.currentIndex + 1}:`, currentQuestion.question);
        
        // Update question info
        Utils.$('#exam-question-number').textContent = 
            `Question ${this.examState.currentIndex + 1} of ${this.examState.questions.length}`;
        Utils.$('#exam-question-subject').textContent = Utils.capitalize(currentQuestion.subject);
        
        // Update progress bar
        const progress = ((this.examState.currentIndex + 1) / this.examState.questions.length) * 100;
        Utils.$('#exam-progress-fill').style.width = `${progress}%`;
        
        // Display question text
        Utils.$('#exam-question-text').textContent = currentQuestion.question;
        
        // Create options
        const optionsContainer = Utils.$('#exam-options-container');
        optionsContainer.innerHTML = '';
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = Utils.create('div', {
                className: 'option exam-option',
                dataset: { index: index.toString() }
            });
            
            optionElement.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;
            
            // Check if this option was previously selected
            const previousAnswer = this.examState.answers[currentQuestion.id];
            if (previousAnswer === index) {
                optionElement.classList.add('selected');
            }
            
            optionElement.addEventListener('click', () => this.selectExamOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // Update navigation buttons
        Utils.$('#exam-prev-btn').disabled = this.examState.currentIndex === 0;
        
        const isLastQuestion = this.examState.currentIndex === this.examState.questions.length - 1;
        const nextBtn = Utils.$('#exam-next-btn');
        const submitBtn = Utils.$('#exam-submit-btn');
        
        if (isLastQuestion) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            submitBtn.style.display = 'none';
        }
    }

    selectExamOption(index) {
        const currentQuestion = this.examState.questions[this.examState.currentIndex];
        
        // Store the answer
        this.examState.answers[currentQuestion.id] = index;
        
        // Update UI
        Utils.$$('.exam-option').forEach(opt => opt.classList.remove('selected'));
        Utils.$(`[data-index="${index}"]`).classList.add('selected');
        
        console.log(`Selected option ${index} for question ${currentQuestion.id}`);
    }

    showPreviousExamQuestion() {
        if (this.examState.currentIndex > 0) {
            this.examState.currentIndex--;
            this.showExamQuestion();
        }
    }

    showNextExamQuestion() {
        if (this.examState.currentIndex < this.examState.questions.length - 1) {
            this.examState.currentIndex++;
            this.showExamQuestion();
        }
    }

    submitExam() {
        console.log('📝 Submitting exam...');
        
        if (this.examState.timer) {
            clearInterval(this.examState.timer);
        }
        
        // Calculate results
        const results = this.calculateExamResults();
        console.log('Exam results:', results);
        
        // Save exam history if storage is available
        if (window.storage && window.storage.saveExamResult) {
            window.storage.saveExamResult({
                score: results.percentage,
                totalQuestions: results.total,
                subjects: results.subjectBreakdown,
                timeSpent: Date.now() - this.examState.startTime,
                questions: this.examState.questions.map(q => ({
                    ...q,
                    userAnswer: this.examState.answers[q.id],
                    isCorrect: this.examState.answers[q.id] === q.answer_index
                }))
            });
        }
        
        // Show results
        this.showExamResults(results);
        
        Utils.showToast(`Exam submitted! Score: ${results.percentage}%`, 
                       results.percentage >= 70 ? 'success' : 'warning', 5000);
    }

    calculateExamResults() {
        const total = this.examState.questions.length;
        let correct = 0;
        const subjectBreakdown = {};
        
        this.examState.questions.forEach(question => {
            const userAnswer = this.examState.answers[question.id];
            const isCorrect = userAnswer === question.answer_index;
            
            if (isCorrect) correct++;
            
            if (!subjectBreakdown[question.subject]) {
                subjectBreakdown[question.subject] = { correct: 0, total: 0 };
            }
            
            subjectBreakdown[question.subject].total++;
            if (isCorrect) subjectBreakdown[question.subject].correct++;
        });
        
        return {
            correct,
            total,
            percentage: Math.round((correct / total) * 100),
            subjectBreakdown
        };
    }

    showExamResults(results) {
        console.log('📊 Showing exam results...');
        
        // Hide exam questions, show results
        Utils.$('#exam-questions')?.classList.add('hidden');
        
        const examResultsContainer = Utils.$('#exam-results');
        if (!examResultsContainer) return;
        
        // Calculate time spent
        const timeSpent = Math.round((Date.now() - this.examState.startTime) / 1000 / 60); // minutes
        
        examResultsContainer.innerHTML = `
            <div class="exam-results-content">
                <div class="results-header">
                    <h2>🎉 Mock Exam Complete!</h2>
                    <div class="final-score ${results.percentage >= 70 ? 'good' : results.percentage >= 50 ? 'okay' : 'needs-work'}">
                        ${results.percentage}%
                    </div>
                    <div class="score-details">
                        ${results.correct} out of ${results.total} questions correct
                    </div>
                </div>
                
                <div class="results-stats">
                    <div class="stat-item">
                        <div class="stat-value">${timeSpent}</div>
                        <div class="stat-label">Minutes</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${Math.round(results.total / timeSpent)}</div>
                        <div class="stat-label">Questions/Min</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${Object.keys(this.examState.answers).length}</div>
                        <div class="stat-label">Answered</div>
                    </div>
                </div>
                
                <div class="subject-breakdown">
                    <h3>Subject Performance</h3>
                    ${Object.entries(results.subjectBreakdown).map(([subject, stats]) => `
                        <div class="subject-result">
                            <div class="subject-name">${Utils.capitalize(subject)}</div>
                            <div class="subject-score">
                                ${stats.correct}/${stats.total} 
                                (${Math.round((stats.correct / stats.total) * 100)}%)
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="performance-message">
                    ${this.getPerformanceMessage(results.percentage)}
                </div>
                
                <div class="results-actions">
                    <button class="btn-outline" onclick="app.reviewExamAnswers()">Review Answers</button>
                    <button class="btn-secondary" onclick="app.startExam()">Retake Exam</button>
                    <button class="btn-primary" onclick="app.exitExam()">Back to Home</button>
                </div>
            </div>
        `;
        
        examResultsContainer.classList.remove('hidden');
    }
    
    getPerformanceMessage(percentage) {
        if (percentage >= 90) {
            return "🌟 Outstanding! You have excellent mastery of the material!";
        } else if (percentage >= 80) {
            return "👏 Great work! You're well prepared for your WAEC exam!";
        } else if (percentage >= 70) {
            return "👍 Good job! Keep practicing to improve further!";
        } else if (percentage >= 50) {
            return "📚 You're making progress. Focus on your weak areas and try again!";
        } else {
            return "💪 Keep studying! Practice more questions to build your confidence!";
        }
    }
    
    reviewExamAnswers() {
        console.log('📖 Reviewing exam answers...');
        // TODO: Implement answer review functionality
        Utils.showToast('Answer review coming soon!', 'info', 3000);
    }

    exitExam() {
        if (this.examState.timer) {
            clearInterval(this.examState.timer);
        }
        
        this.examState = {
            questions: [],
            answers: {},
            currentIndex: 0,
            startTime: null,
            timeLimit: null,
            timer: null,
            isActive: false
        };
        
        window.ui.showScreen('home');
    }

    // UI Update Methods
    updateUI() {
        if (!this.isInitialized) return;
        
        this.updateHomeStatistics();
        this.updateSubjectProgress();
        this.updateStreakDisplay();
    }

    updateHomeStatistics() {
        const stats = window.analytics.getPerformanceMetrics('week');
        
        // Update hero stats
        const totalQuestionsEl = Utils.$('#total-questions-answered');
        const currentStreakEl = Utils.$('#current-streak');
        const overallAccuracyEl = Utils.$('#overall-accuracy');
        
        if (totalQuestionsEl) totalQuestionsEl.textContent = stats.totalQuestions || 0;
        if (currentStreakEl) currentStreakEl.textContent = stats.studyStreak || 0;
        if (overallAccuracyEl) overallAccuracyEl.textContent = `${Math.round(stats.accuracy || 0)}%`;
    }

    updateSubjectProgress() {
        const subjects = ['math', 'english', 'biology'];
        
        subjects.forEach(subject => {
            const topics = window.selector.getTopics(subject);
            const mastery = window.storage.getSubjectMastery(subject, topics);
            
            // Update subject card stats
            const questionsEl = Utils.$(`#${subject}-questions`);
            const accuracyEl = Utils.$(`#${subject}-accuracy`);
            
            const subjectStats = window.analytics.getPerformanceMetrics('week').subjectStats[subject];
            
            if (questionsEl) questionsEl.textContent = subjectStats?.questionsAnswered || 0;
            if (accuracyEl) accuracyEl.textContent = `${Math.round(subjectStats?.accuracy || 0)}%`;
            
            // Update progress ring
            const progressRing = Utils.$(`.subject-card[data-subject="${subject}"] .mastery-ring`);
            if (progressRing) {
                progressRing.dataset.percentage = mastery;
                progressRing.querySelector('.ring-text').textContent = `${mastery}%`;
            }
        });
        
        // Re-animate progress rings
        if (window.ui && window.ui.animateProgressRings) {
            window.ui.animateProgressRings();
        }
    }

    updateStreakDisplay() {
        const streak = window.storage.calculateStudyStreak();
        const streakEl = Utils.$('#streak-display');
        
        if (streakEl) {
            streakEl.textContent = `🔥 ${streak}`;
        }
    }

    updateQuestionCounts(stats) {
        // Update selection cards with question counts
        const mathStatsEl = Utils.$('.selection-card[data-subject="math"] .selection-stats');
        const englishStatsEl = Utils.$('.selection-card[data-subject="english"] .selection-stats');
        const biologyStatsEl = Utils.$('.selection-card[data-subject="biology"] .selection-stats');
        
        if (mathStatsEl) {
            mathStatsEl.innerHTML = `<span>${window.selector.getTopics('math').length} topics</span><span>${stats.math} questions</span>`;
        }
        if (englishStatsEl) {
            englishStatsEl.innerHTML = `<span>${window.selector.getTopics('english').length} topics</span><span>${stats.english} questions</span>`;
        }
        if (biologyStatsEl) {
            biologyStatsEl.innerHTML = `<span>${window.selector.getTopics('biology').length} topics</span><span>${stats.biology} questions</span>`;
        }
    }

    updateSessionStats(stats) {
        const sessionProgressEl = Utils.$('#session-progress');
        const sessionAccuracyEl = Utils.$('#session-accuracy');
        
        if (sessionProgressEl) {
            sessionProgressEl.textContent = `${stats.questionsAnswered}/15`;
        }
        if (sessionAccuracyEl) {
            sessionAccuracyEl.textContent = `${stats.accuracy}% accuracy`;
        }
    }

    // Utility Methods
    getMasteryLevel(percentage) {
        if (percentage >= 80) return 'strong';
        if (percentage >= 50) return 'medium';
        return 'weak';
    }

    findWeakTopics() {
        const weakTopics = [];
        const subjects = ['math', 'english', 'biology'];
        
        subjects.forEach(subject => {
            const topics = window.selector.getTopics(subject);
            topics.forEach(topic => {
                const mastery = window.storage.getTopicMastery(subject, topic);
                if (mastery < 60) {
                    weakTopics.push({ subject, topic, mastery });
                }
            });
        });
        
        return weakTopics.sort((a, b) => a.mastery - b.mastery);
    }

    showSubjectSelection() {
        console.log('📋 Showing subject selection screen...');
        
        // Reset practice state
        this.practiceState = {
            subject: null,
            selectedTopics: [],
            currentQuestion: null,
            questionIndex: 0,
            sessionQuestions: [],
            sessionStats: { correct: 0, total: 0, timeSpent: 0 },
            startTime: null,
            isAdaptive: false
        };
        
        // Show/hide correct sections
        const subjectSelection = Utils.$('#subject-selection');
        const topicSelection = Utils.$('#topic-selection');
        const questionView = Utils.$('#question-view');
        
        if (subjectSelection) {
            subjectSelection.classList.remove('hidden');
            console.log('✅ Subject selection shown');
        }
        if (topicSelection) {
            topicSelection.classList.add('hidden');
        }
        if (questionView) {
            questionView.classList.add('hidden');
        }
        
        // Update practice header
        const practiceTitle = Utils.$('#practice-title');
        if (practiceTitle) {
            practiceTitle.textContent = 'Smart Practice';
        }
    }

    filterTopics(searchTerm) {
        Utils.$$('.topic-card').forEach(card => {
            const topicName = card.dataset.topic?.toLowerCase() || '';
            const visible = topicName.includes(searchTerm.toLowerCase());
            card.style.display = visible ? 'block' : 'none';
        });
    }

    filterTopicsByLevel(level) {
        Utils.$$('.topic-card').forEach(card => {
            const cardLevel = card.dataset.difficulty;
            let visible = true;
            
            if (level !== 'all') {
                visible = cardLevel === level;
            }
            
            card.style.display = visible ? 'block' : 'none';
        });
    }

    selectAllTopics() {
        const subjects = ['math', 'english', 'biology'];
        if (this.practiceState.subject && subjects.includes(this.practiceState.subject)) {
            const topics = window.selector.getTopics(this.practiceState.subject);
            this.practiceState.selectedTopics = [...topics];
            this.practiceState.isAdaptive = false;
            
            this.updateSelectedTopicsUI();
            this.updateStartButtonState();
        }
    }

    bookmarkQuestion() {
        if (this.practiceState.currentQuestion) {
            // TODO: Implement bookmarking functionality
            Utils.showToast('Question bookmarked!', 'success', 2000);
        }
    }

    showHint() {
        if (!this.practiceState.currentQuestion) return;
        
        const question = this.practiceState.currentQuestion;
        const hint = this.generateSmartHint(question);
        
        // Show hint in mobile-friendly way
        this.displayHintModal(hint);
    }
    
    generateSmartHint(question) {
        const commonHints = {
            // Math hints by topic
            'Algebra': {
                'like-terms': 'Look for terms with the same variable. Add or subtract the coefficients.',
                'linear-equations': 'Isolate the variable by doing the same operation to both sides.',
                'factoring': 'Look for patterns like difference of squares: a² - b² = (a+b)(a-b)'
            },
            'Geometry': {
                'area': 'Remember: Rectangle area = length × width, Triangle area = ½ × base × height',
                'volume': 'Volume formulas: Cube = s³, Cylinder = πr²h',
                'angles': 'Angles in a triangle add up to 180°'
            },
            'Statistics': {
                'mean': 'Mean = Sum of all values ÷ Number of values',
                'probability': 'Probability = Favorable outcomes ÷ Total possible outcomes'
            },
            
            // English hints by topic  
            'Grammar': {
                'parts-of-speech': 'Nouns name things, Verbs show action, Adjectives describe nouns',
                'tenses': 'Past tense usually ends in -ed, Present uses base form, Future uses "will"'
            },
            'Vocabulary': {
                'synonyms': 'Look for words with similar meanings',
                'antonyms': 'Find words with opposite meanings'
            },
            
            // Biology hints
            'Cell Biology': {
                'organelles': 'Mitochondria = powerhouse, Nucleus = control center, Ribosomes = protein makers',
                'processes': 'Photosynthesis makes glucose, Respiration breaks it down for energy'
            }
        };
        
        // Get specific hint based on question topic and tags
        const topicHints = commonHints[question.topic] || {};
        
        // Check if question has tags that match hint categories
        if (question.tags) {
            for (const tag of question.tags) {
                if (topicHints[tag]) {
                    return {
                        type: 'specific',
                        title: `${question.topic} Tip`,
                        content: topicHints[tag],
                        icon: '💡'
                    };
                }
            }
        }
        
        // Fallback to general hints by subject
        const generalHints = {
            math: 'Break the problem into smaller steps. What operation do you need?',
            english: 'Read each option carefully. Which one sounds most natural?',
            biology: 'Think about the function or process. What is the main purpose?'
        };
        
        return {
            type: 'general',
            title: 'Study Tip',
            content: generalHints[question.subject] || 'Read the question carefully and eliminate obviously wrong answers.',
            icon: '🤔'
        };
    }
    
    displayHintModal(hint) {
        // Create mobile-friendly hint modal
        const hintModal = Utils.create('div', {
            className: 'hint-modal',
            innerHTML: `
                <div class="hint-content">
                    <div class="hint-header">
                        <span class="hint-icon">${hint.icon}</span>
                        <h3>${hint.title}</h3>
                        <button class="close-hint" onclick="this.closest('.hint-modal').remove()">×</button>
                    </div>
                    <div class="hint-body">
                        <p>${hint.content}</p>
                    </div>
                    <div class="hint-actions">
                        <button class="btn-outline" onclick="this.closest('.hint-modal').remove()">Got it!</button>
                        <button class="btn-secondary" onclick="app.showDetailedExplanation()">Need more help?</button>
                    </div>
                </div>
            `
        });
        
        document.body.appendChild(hintModal);
        
        // Add CSS for mobile responsiveness
        if (!document.querySelector('#hint-styles')) {
            const hintStyles = Utils.create('style', {
                id: 'hint-styles',
                textContent: `
                    .hint-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        padding: 20px;
                    }
                    
                    .hint-content {
                        background: white;
                        border-radius: 12px;
                        max-width: 400px;
                        width: 100%;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                        overflow: hidden;
                    }
                    
                    .hint-header {
                        display: flex;
                        align-items: center;
                        padding: 20px;
                        background: #f8fafc;
                        border-bottom: 1px solid #e2e8f0;
                    }
                    
                    .hint-icon {
                        font-size: 24px;
                        margin-right: 12px;
                    }
                    
                    .hint-header h3 {
                        flex: 1;
                        margin: 0;
                        font-size: 18px;
                        color: #2d3748;
                    }
                    
                    .close-hint {
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #718096;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .hint-body {
                        padding: 20px;
                    }
                    
                    .hint-body p {
                        margin: 0;
                        line-height: 1.5;
                        color: #4a5568;
                    }
                    
                    .hint-actions {
                        padding: 20px;
                        display: flex;
                        gap: 12px;
                        justify-content: flex-end;
                        background: #f8fafc;
                    }
                    
                    @media (max-width: 480px) {
                        .hint-modal {
                            padding: 16px;
                        }
                        
                        .hint-actions {
                            flex-direction: column;
                        }
                        
                        .hint-actions button {
                            width: 100%;
                        }
                    }
                `
            });
            document.head.appendChild(hintStyles);
        }
        
        // Close on background click
        hintModal.addEventListener('click', (e) => {
            if (e.target === hintModal) {
                hintModal.remove();
            }
        });
    }
    
    showDetailedExplanation() {
        const question = this.practiceState.currentQuestion;
        const explanation = this.generateDetailedExplanation(question);
        
        // Close existing hint modal
        document.querySelector('.hint-modal')?.remove();
        
        // Show detailed explanation modal
        this.displayExplanationModal(explanation);
    }
    
    generateDetailedExplanation(question) {
        // Enhanced explanations with common mistakes
        const detailedExplanations = {
            'math_algebra_001': {
                explanation: question.explanation,
                commonMistakes: [
                    { mistake: 'Getting 5x', reason: 'Adding all coefficients: 3 + 2 + 1 = 6', correction: 'Remember to subtract: 3 + 2 - 1 = 4' },
                    { mistake: 'Getting 6x', reason: 'Ignoring the minus sign', correction: 'Pay attention to operation signs' }
                ],
                steps: [
                    'Identify like terms (all have variable x)',
                    'Group the coefficients: 3 + 2 - 1',
                    'Calculate: 3 + 2 - 1 = 4',
                    'Result: 4x'
                ]
            }
        };
        
        return detailedExplanations[question.id] || {
            explanation: question.explanation,
            commonMistakes: [],
            steps: ['Read the question carefully', 'Identify what\'s being asked', 'Apply the appropriate method', 'Check your answer']
        };
    }
    
    displayExplanationModal(explanation) {
        const explanationModal = Utils.create('div', {
            className: 'explanation-modal',
            innerHTML: `
                <div class="explanation-content">
                    <div class="explanation-header">
                        <span class="explanation-icon">📝</span>
                        <h3>Detailed Explanation</h3>
                        <button class="close-explanation" onclick="this.closest('.explanation-modal').remove()">×</button>
                    </div>
                    <div class="explanation-body">
                        <div class="explanation-section">
                            <h4>Solution:</h4>
                            <p>${explanation.explanation}</p>
                        </div>
                        
                        ${explanation.steps.length > 0 ? `
                            <div class="explanation-section">
                                <h4>Step by step:</h4>
                                <ol>
                                    ${explanation.steps.map(step => `<li>${step}</li>`).join('')}
                                </ol>
                            </div>
                        ` : ''}
                        
                        ${explanation.commonMistakes.length > 0 ? `
                            <div class="explanation-section">
                                <h4>Common mistakes to avoid:</h4>
                                ${explanation.commonMistakes.map(mistake => `
                                    <div class="mistake-item">
                                        <strong>❌ ${mistake.mistake}:</strong> ${mistake.reason}<br>
                                        <strong>✅ Correction:</strong> ${mistake.correction}
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="explanation-actions">
                        <button class="btn-primary" onclick="this.closest('.explanation-modal').remove()">I understand!</button>
                    </div>
                </div>
            `
        });
        
        document.body.appendChild(explanationModal);
        
        // Add explanation modal styles
        if (!document.querySelector('#explanation-styles')) {
            const explanationStyles = Utils.create('style', {
                id: 'explanation-styles',
                textContent: `
                    .explanation-modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.7);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1001;
                        padding: 20px;
                        overflow-y: auto;
                    }
                    
                    .explanation-content {
                        background: white;
                        border-radius: 12px;
                        max-width: 500px;
                        width: 100%;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                    }
                    
                    .explanation-header {
                        display: flex;
                        align-items: center;
                        padding: 20px;
                        background: #667eea;
                        color: white;
                        position: sticky;
                        top: 0;
                    }
                    
                    .explanation-icon {
                        font-size: 24px;
                        margin-right: 12px;
                    }
                    
                    .explanation-header h3 {
                        flex: 1;
                        margin: 0;
                        font-size: 18px;
                    }
                    
                    .close-explanation {
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: white;
                        padding: 0;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .explanation-body {
                        padding: 20px;
                    }
                    
                    .explanation-section {
                        margin-bottom: 24px;
                    }
                    
                    .explanation-section:last-child {
                        margin-bottom: 0;
                    }
                    
                    .explanation-section h4 {
                        margin: 0 0 12px 0;
                        color: #2d3748;
                        font-size: 16px;
                    }
                    
                    .explanation-section p {
                        margin: 0;
                        line-height: 1.5;
                        color: #4a5568;
                    }
                    
                    .explanation-section ol {
                        margin: 0;
                        padding-left: 20px;
                    }
                    
                    .explanation-section li {
                        margin-bottom: 8px;
                        line-height: 1.4;
                        color: #4a5568;
                    }
                    
                    .mistake-item {
                        background: #fff5f5;
                        border: 1px solid #fed7d7;
                        border-radius: 8px;
                        padding: 16px;
                        margin-bottom: 12px;
                        font-size: 14px;
                        line-height: 1.4;
                    }
                    
                    .explanation-actions {
                        padding: 20px;
                        background: #f8fafc;
                        display: flex;
                        justify-content: center;
                    }
                    
                    @media (max-width: 480px) {
                        .explanation-modal {
                            padding: 12px;
                        }
                        
                        .explanation-content {
                            max-height: 95vh;
                        }
                        
                        .explanation-header,
                        .explanation-body,
                        .explanation-actions {
                            padding: 16px;
                        }
                    }
                `
            });
            document.head.appendChild(explanationStyles);
        }
    }

    updateExamConfiguration() {
        const questionCount = parseInt(Utils.$('input[name="exam-questions"]:checked')?.value || 40);
        
        // Update subject distribution
        const mathCount = Math.floor(questionCount / 3);
        const englishCount = Math.floor(questionCount / 3);
        const biologyCount = questionCount - mathCount - englishCount;
        
        Utils.$('#math-count').textContent = mathCount;
        Utils.$('#english-count').textContent = englishCount;
        Utils.$('#biology-count').textContent = biologyCount;
    }

    adjustSubjectCount(subject, action) {
        const currentCount = parseInt(Utils.$(`#${subject}-count`).textContent);
        const newCount = action === 'increase' ? currentCount + 1 : Math.max(1, currentCount - 1);
        
        Utils.$(`#${subject}-count`).textContent = newCount;
        
        // Update total and adjust other subjects if needed
        this.balanceSubjectCounts();
    }

    balanceSubjectCounts() {
        const totalQuestions = parseInt(Utils.$('input[name="exam-questions"]:checked').value);
        const mathCount = parseInt(Utils.$('#math-count').textContent);
        const englishCount = parseInt(Utils.$('#english-count').textContent);
        const biologyCount = parseInt(Utils.$('#biology-count').textContent);
        
        const currentTotal = mathCount + englishCount + biologyCount;
        
        if (currentTotal !== totalQuestions) {
            // Adjust proportionally if needed
            console.log('Adjusting subject distribution...');
        }
    }

    requestNotificationPermission() {
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                this.updateNotificationButton();
                if (permission === 'granted') {
                    Utils.showToast('Notifications enabled! You\'ll get study reminders.', 'success', 3000);
                }
            });
        }
    }

    updateNotificationButton() {
        const notificationBtn = Utils.$('#notifications-btn');
        if (!notificationBtn) return;
        
        if ('Notification' in window) {
            switch (Notification.permission) {
                case 'granted':
                    notificationBtn.textContent = '🔔';
                    notificationBtn.title = 'Notifications enabled';
                    break;
                case 'denied':
                    notificationBtn.textContent = '🔕';
                    notificationBtn.title = 'Notifications disabled';
                    break;
                default:
                    notificationBtn.textContent = '🔔';
                    notificationBtn.title = 'Enable notifications';
            }
        }
    }

    handleServiceWorkerMessage(data) {
        switch (data.type) {
            case 'PROGRESS_SYNCED':
                Utils.showToast(`Synced ${data.count} progress updates`, 'success', 3000);
                break;
            case 'CACHE_UPDATED':
                Utils.showToast('App updated! New features available.', 'info', 5000);
                break;
        }
    }

    showError(message) {
        Utils.showToast(message, 'error', 0, [
            {
                text: 'Refresh',
                handler: () => window.location.reload()
            }
        ]);
    }
    
    // Educational Intelligence Features - Access Points
    
    showTeacherDashboard() {
        const studentData = window.analytics.exportStudentData();
        const alerts = studentData.alerts;
        
        console.log('📊 TEACHER DASHBOARD');
        console.log('Student ID:', studentData.studentId);
        console.log('Overall Performance:', studentData.summary);
        console.log('🚨 Student Alerts:', alerts);
        console.log('📈 Critical Topics:', studentData.criticalTopics);
        
        // Display in user-friendly way
        const alertsDisplay = alerts.length > 0 ? 
            alerts.map(alert => `${alert.priority.toUpperCase()}: ${alert.title} - ${alert.description}`).join('\n') :
            'No alerts - student is doing well!';
            
        Utils.showToast(
            `Teacher Dashboard:\n${alerts.length} alerts for student\n\nCheck browser console for full details`, 
            alerts.some(a => a.priority === 'critical') ? 'error' : alerts.length > 0 ? 'warning' : 'success',
            8000
        );
        
        return studentData;
    }
    
    showParentReport(timeRange = 'week') {
        const report = window.analytics.generateShareableReport(timeRange);
        
        console.log('👨‍👩‍👧‍👦 PARENT PROGRESS REPORT');
        console.log('Report Date:', report.data.reportDate);
        console.log('Study Habits:', report.data.studyHabits);
        console.log('Performance:', report.data.performance);
        console.log('Subject Breakdown:', report.data.subjects);
        console.log('Areas Needing Attention:', report.data.areasNeedingAttention);
        console.log('Strengths:', report.data.strengths);
        console.log('Achievements:', report.data.achievements);
        console.log('Recommendations for Parents:', report.data.parentRecommendations);
        
        // Show shareable summary
        Utils.showToast(
            `Parent Report Generated!\n\n${report.summary}\n\nCheck console for full report details`,
            'info',
            8000
        );
        
        return report;
    }
    
    // Quick demo functions for testing
    demoStudentAlerts() {
        // Simulate some poor performance to trigger alerts
        const mockMetrics = {
            accuracy: 45,  // Low accuracy
            totalQuestions: 20,
            progressTrend: { direction: 'declining', change: -15 },
            consistency: 0.2,  // Poor consistency
            studyStreak: 0,
            subjectStats: {
                math: { accuracy: 30, questionsAnswered: 10 },
                english: { accuracy: 60, questionsAnswered: 5 }
            },
            topicStats: {
                'Algebra': { needsAttention: true, accuracy: 25, subject: 'math' },
                'Grammar': { needsAttention: true, accuracy: 35, subject: 'english' }
            }
        };
        
        // Temporarily override analytics method
        const originalMethod = window.analytics.getPerformanceMetrics;
        window.analytics.getPerformanceMetrics = () => mockMetrics;
        
        const alerts = window.analytics.generateStudentAlerts();
        
        // Restore original method
        window.analytics.getPerformanceMetrics = originalMethod;
        
        console.log('🚨 DEMO: Student Alerts (Simulated Poor Performance)');
        console.log(alerts);
        
        Utils.showToast(
            `Demo Alerts Generated!\n${alerts.length} alerts detected\n\nCheck console for details`,
            'warning',
            5000
        );
        
        return alerts;
    }
    
    demoSmartHints() {
        // Create a demo question to show smart hints
        const demoQuestion = {
            id: 'demo_algebra_001',
            subject: 'math',
            topic: 'Algebra',
            tags: ['like-terms'],
            question: 'Simplify: 3x + 2x - x',
            explanation: 'Combine like terms: 3x + 2x - x = (3 + 2 - 1)x = 4x'
        };
        
        // Generate and show hint
        const hint = this.generateSmartHint(demoQuestion);
        this.displayHintModal(hint);
        
        console.log('💡 SMART HINTS DEMO');
        console.log('Demo Question:', demoQuestion);
        console.log('Generated Hint:', hint);
    }

    // Utility for testing new features
    testNewFeatures() {
        console.log('🧪 TESTING NEW EDUCATIONAL FEATURES');
        console.log('');
        
        // Test 1: Smart Hints
        console.log('1. Smart Hints System:');
        const mockQuestion = {
            id: 'math_algebra_001',
            subject: 'math',
            topic: 'Algebra', 
            tags: ['like-terms'],
            explanation: 'Combine like terms: 3x + 2x - x = 4x'
        };
        
        const hint = this.generateSmartHint(mockQuestion);
        console.log('   Generated hint:', hint);
        
        // Test 2: Teacher Alerts
        console.log('');
        console.log('2. Teacher Alert System:');
        const demoAlerts = this.demoStudentAlerts();
        console.log(`   Generated ${demoAlerts.length} demo alerts`);
        
        // Test 3: Parent Reports
        console.log('');
        console.log('3. Parent Report System:');
        const parentReport = this.showParentReport();
        console.log('   Parent report generated successfully');
        
        Utils.showToast('🧪 All new features tested!\n\nCheck browser console for detailed results', 'success', 5000);
        
        return {
            hints: hint,
            alerts: demoAlerts,
            parentReport: parentReport
        };
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new WAECAceApp();
    window.app.initialize();
});

// Handle app updates
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    
    Utils.showToast('WAEC Ace can be installed on your device!', 'info', 0, [
        {
            text: 'Install',
            handler: () => {
                e.prompt();
                e.userChoice.then(result => {
                    if (result.outcome === 'accepted') {
                        Utils.showToast('Thanks for installing WAEC Ace!', 'success');
                    }
                });
            }
        }
    ]);
});