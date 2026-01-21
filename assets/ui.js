/**
 * UI.js - Advanced user interface management
 * Handles animations, transitions, modals, and interactive elements
 */

class UIManager {
    constructor() {
        this.activeScreen = 'home';
        this.modalStack = [];
        this.notifications = [];
        this.animations = new Map();
        this.touchState = {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            isDragging: false
        };
        
        this.init();
    }

    init() {
        this.setupScreenManagement();
        this.setupModalSystem();
        this.setupToastSystem();
        this.setupTouchGestures();
        this.setupProgressAnimations();
        this.setupLoadingScreen();
        this.setupBottomNavigation();
        this.observeNetworkStatus();
    }

    // Screen Management
    setupScreenManagement() {
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.screen) {
                this.showScreen(e.state.screen, false);
            }
        });
        
        // Set initial state
        if (window.location.hash) {
            const screen = window.location.hash.substring(1);
            this.showScreen(screen, false);
        } else {
            history.replaceState({ screen: 'home' }, '', '#home');
        }
    }

    showScreen(screenName, pushState = true) {
        const currentScreen = Utils.$(`.screen.active`);
        const newScreen = Utils.$(`#${screenName}-screen`);
        
        if (!newScreen || this.activeScreen === screenName) return;
        
        // Update history
        if (pushState) {
            history.pushState({ screen: screenName }, '', `#${screenName}`);
        }
        
        // Animate screen transition
        this.animateScreenTransition(currentScreen, newScreen).then(() => {
            this.activeScreen = screenName;
            this.updateBottomNavigation();
            
            // Trigger screen-specific initialization
            this.initializeScreen(screenName);
        });
    }

    async animateScreenTransition(fromScreen, toScreen) {
        const isForward = this.getScreenOrder(toScreen.id) > this.getScreenOrder(fromScreen?.id || 'home-screen');
        
        // Prepare new screen
        toScreen.style.transform = isForward ? 'translateX(100%)' : 'translateX(-100%)';
        toScreen.classList.add('active');
        
        // Animate out current screen
        if (fromScreen) {
            fromScreen.style.transform = isForward ? 'translateX(-100%)' : 'translateX(100%)';
        }
        
        // Animate in new screen
        await this.animateElement(toScreen, {
            transform: 'translateX(0%)'
        }, 300);
        
        // Clean up
        if (fromScreen) {
            fromScreen.classList.remove('active');
            fromScreen.style.transform = '';
        }
        toScreen.style.transform = '';
    }

    getScreenOrder(screenId) {
        const order = {
            'home-screen': 0,
            'practice-screen': 1,
            'exam-screen': 2,
            'progress-screen': 3
        };
        return order[screenId] || 0;
    }

    initializeScreen(screenName) {
        switch (screenName) {
            case 'home':
                this.initializeHomeScreen();
                break;
            case 'practice':
                this.initializePracticeScreen();
                break;
            case 'exam':
                this.initializeExamScreen();
                break;
            case 'progress':
                this.initializeProgressScreen();
                break;
        }
    }

    // Modal System
    setupModalSystem() {
        const overlay = Utils.$('#modal-overlay');
        
        // Close modal on overlay click
        overlay?.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeModal();
            }
        });
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalStack.length > 0) {
                this.closeModal();
            }
        });
    }

    async showModal(modalId, data = {}) {
        const overlay = Utils.$('#modal-overlay');
        const modal = Utils.$(`#${modalId}`);
        
        if (!modal || !overlay) return;
        
        // Add to modal stack
        this.modalStack.push({ modalId, data });
        
        // Setup modal content
        this.setupModalContent(modalId, data);
        
        // Show overlay
        overlay.classList.remove('hidden');
        
        // Animate modal in
        modal.style.transform = 'scale(0.8)';
        modal.style.opacity = '0';
        
        await this.animateElement(modal, {
            transform: 'scale(1)',
            opacity: '1'
        }, 300);
        
        // Focus management
        modal.focus();
    }

    async closeModal() {
        if (this.modalStack.length === 0) return;
        
        const { modalId } = this.modalStack.pop();
        const overlay = Utils.$('#modal-overlay');
        const modal = Utils.$(`#${modalId}`);
        
        // Animate modal out
        await this.animateElement(modal, {
            transform: 'scale(0.8)',
            opacity: '0'
        }, 200);
        
        // Hide overlay if no more modals
        if (this.modalStack.length === 0) {
            overlay.classList.add('hidden');
        }
    }

    setupModalContent(modalId, data) {
        switch (modalId) {
            case 'settings-modal':
                this.setupSettingsModal(data);
                break;
            // Add more modal types as needed
        }
    }

    // Toast System
    setupToastSystem() {
        // Create toast container if it doesn't exist
        let container = Utils.$('#toast-container');
        if (!container) {
            container = Utils.create('div', { id: 'toast-container', className: 'toast-container' });
            document.body.appendChild(container);
        }
    }

    showToast(message, type = 'info', duration = 4000, actions = []) {
        const toast = Utils.create('div', {
            className: `toast toast-${type}`,
            dataset: { type }
        });
        
        const content = Utils.create('div', { className: 'toast-content' });
        const text = Utils.create('span', { className: 'toast-text' }, message);
        content.appendChild(text);
        
        // Add action buttons
        if (actions.length > 0) {
            const actionContainer = Utils.create('div', { className: 'toast-actions' });
            actions.forEach(action => {
                const button = Utils.create('button', {
                    className: 'toast-action-btn',
                    textContent: action.text
                });
                button.addEventListener('click', () => {
                    action.handler();
                    this.dismissToast(toast);
                });
                actionContainer.appendChild(button);
            });
            content.appendChild(actionContainer);
        }
        
        // Add close button
        const closeBtn = Utils.create('button', {
            className: 'toast-close',
            innerHTML: '×'
        });
        closeBtn.addEventListener('click', () => this.dismissToast(toast));
        
        toast.appendChild(content);
        toast.appendChild(closeBtn);
        
        const container = Utils.$('#toast-container');
        container.appendChild(toast);
        
        // Animate in
        this.animateToastIn(toast);
        
        // Auto dismiss
        if (duration > 0) {
            setTimeout(() => this.dismissToast(toast), duration);
        }
        
        // Add to notifications array
        this.notifications.push({ toast, type, message, timestamp: Date.now() });
        
        return toast;
    }

    async dismissToast(toast) {
        await this.animateElement(toast, {
            transform: 'translateX(100%)',
            opacity: '0'
        }, 200);
        
        toast.remove();
        
        // Remove from notifications array
        this.notifications = this.notifications.filter(n => n.toast !== toast);
    }

    async animateToastIn(toast) {
        toast.style.transform = 'translateX(100%)';
        toast.style.opacity = '0';
        
        await this.animateElement(toast, {
            transform: 'translateX(0)',
            opacity: '1'
        }, 300);
    }

    // Touch Gestures
    setupTouchGestures() {
        let startX, startY, currentX, currentY;
        
        document.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
        }, { passive: true });
        
        document.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;
            
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
            
            const diffX = startX - currentX;
            const diffY = startY - currentY;
            
            // Horizontal swipe detection
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left - next screen
                    this.handleSwipeLeft();
                } else {
                    // Swipe right - previous screen
                    this.handleSwipeRight();
                }
                
                // Reset
                startX = null;
                startY = null;
            }
        }, { passive: true });
        
        document.addEventListener('touchend', () => {
            startX = null;
            startY = null;
        }, { passive: true });
    }

    handleSwipeLeft() {
        const screens = ['home', 'practice', 'exam', 'progress'];
        const currentIndex = screens.indexOf(this.activeScreen);
        
        if (currentIndex < screens.length - 1) {
            this.showScreen(screens[currentIndex + 1]);
        }
    }

    handleSwipeRight() {
        const screens = ['home', 'practice', 'exam', 'progress'];
        const currentIndex = screens.indexOf(this.activeScreen);
        
        if (currentIndex > 0) {
            this.showScreen(screens[currentIndex - 1]);
        }
    }

    // Progress Animations
    setupProgressAnimations() {
        // Animate progress rings
        this.animateProgressRings();
        
        // Animate progress bars
        this.animateProgressBars();
    }

    animateProgressRings() {
        const rings = Utils.$$('.mastery-ring');
        
        rings.forEach(ring => {
            const percentage = parseInt(ring.dataset.percentage) || 0;
            const circle = ring.querySelector('circle:last-child');
            const text = ring.querySelector('.ring-text');
            
            if (circle && text) {
                const circumference = 2 * Math.PI * 16; // r=16
                const offset = circumference - (percentage / 100) * circumference;
                
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = circumference;
                
                // Animate
                this.animateElement(circle, {
                    strokeDashoffset: offset
                }, 1000, 'ease-out');
                
                // Animate text
                this.animateNumber(text, 0, percentage, 1000);
            }
        });
    }

    animateProgressBars() {
        const bars = Utils.$$('.progress-fill');
        
        bars.forEach(bar => {
            const targetWidth = bar.dataset.percentage || '0%';
            
            bar.style.width = '0%';
            
            this.animateElement(bar, {
                width: targetWidth
            }, 800, 'ease-out');
        });
    }

    animateNumber(element, from, to, duration) {
        let start = null;
        
        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            
            const current = Math.floor(Utils.lerp(from, to, progress));
            element.textContent = `${current}%`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        requestAnimationFrame(animate);
    }

    // Loading Screen
    setupLoadingScreen() {
        const loadingScreen = Utils.$('#loading-screen');
        
        if (loadingScreen) {
            // Hide loading screen after app initialization
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        }
    }

    showLoadingScreen(message = 'Loading...') {
        const loadingScreen = Utils.$('#loading-screen');
        const loadingText = loadingScreen?.querySelector('p');
        
        if (loadingText) {
            loadingText.textContent = message;
        }
        
        loadingScreen?.classList.remove('hidden');
    }

    hideLoadingScreen() {
        const loadingScreen = Utils.$('#loading-screen');
        loadingScreen?.classList.add('hidden');
    }

    // Bottom Navigation
    setupBottomNavigation() {
        const navItems = Utils.$$('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const screen = item.dataset.screen;
                this.showScreen(screen);
            });
        });
    }

    updateBottomNavigation() {
        const navItems = Utils.$$('.nav-item');
        
        navItems.forEach(item => {
            if (item.dataset.screen === this.activeScreen) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Network Status
    observeNetworkStatus() {
        const updateStatus = () => {
            if (navigator.onLine) {
                this.showToast('Back online! 🌐', 'success', 2000);
            } else {
                this.showToast('You\'re offline. Some features may be limited. 📱', 'warning', 5000);
            }
        };
        
        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
    }

    // Animation Helper
    animateElement(element, properties, duration = 300, easing = 'ease') {
        return new Promise(resolve => {
            const startTime = performance.now();
            const startProperties = {};
            
            // Get initial values
            Object.keys(properties).forEach(prop => {
                startProperties[prop] = getComputedStyle(element)[prop] || 0;
            });
            
            function animate(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Apply easing
                const easedProgress = UIManager.getEasingValue(progress, easing);
                
                // Update properties
                Object.entries(properties).forEach(([prop, targetValue]) => {
                    const startValue = startProperties[prop];
                    const currentValue = UIManager.interpolateValue(startValue, targetValue, easedProgress);
                    element.style[prop] = currentValue;
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            }
            
            requestAnimationFrame(animate);
        });
    }

    static getEasingValue(t, easing) {
        switch (easing) {
            case 'ease-in':
                return t * t;
            case 'ease-out':
                return 1 - (1 - t) * (1 - t);
            case 'ease-in-out':
                return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            default:
                return t;
        }
    }

    static interpolateValue(start, end, progress) {
        if (typeof end === 'string') {
            // Handle string values like percentages, px, etc.
            const startNum = parseFloat(start) || 0;
            const endNum = parseFloat(end);
            const unit = end.replace(/[\d.-]/g, '') || '';
            
            return Utils.lerp(startNum, endNum, progress) + unit;
        }
        
        return Utils.lerp(parseFloat(start) || 0, parseFloat(end), progress);
    }

    // Screen-specific initialization
    initializeHomeScreen() {
        // Update statistics
        this.updateHomeStatistics();
        
        // Animate elements
        this.animateHomeElements();
        
        // Setup interactive elements
        this.setupHomeInteractions();
    }

    updateHomeStatistics() {
        const stats = window.analytics.getPerformanceMetrics('week');
        
        // Update hero stats
        Utils.$('#total-questions-answered').textContent = stats.totalQuestions;
        Utils.$('#current-streak').textContent = stats.studyStreak;
        Utils.$('#overall-accuracy').textContent = `${stats.accuracy}%`;
        
        // Update subject cards
        Object.entries(stats.subjectStats).forEach(([subject, subjectStats]) => {
            Utils.$(`#${subject}-questions`).textContent = subjectStats.questionsAnswered;
            Utils.$(`#${subject}-accuracy`).textContent = `${subjectStats.accuracy}%`;
            
            // Update progress rings
            const ring = Utils.$(`.subject-card[data-subject="${subject}"] .mastery-ring`);
            if (ring) {
                ring.dataset.percentage = subjectStats.accuracy;
            }
        });
        
        // Re-animate progress elements
        this.animateProgressRings();
    }

    animateHomeElements() {
        // Staggered animation for action cards
        const actionCards = Utils.$$('.action-card');
        actionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                this.animateElement(card, {
                    opacity: '1',
                    transform: 'translateY(0)'
                }, 400);
            }, index * 100);
        });
    }

    setupHomeInteractions() {
        // Quick action buttons
        Utils.$('#smart-practice-btn')?.addEventListener('click', () => {
            this.showScreen('practice');
        });
        
        Utils.$('#mock-exam-btn')?.addEventListener('click', () => {
            this.showScreen('exam');
        });
        
        Utils.$('#weak-topics-btn')?.addEventListener('click', () => {
            // Navigate to practice with weak topics filter
            this.showScreen('practice');
            // TODO: Set weak topics filter
        });
        
        Utils.$('#progress-btn')?.addEventListener('click', () => {
            this.showScreen('progress');
        });
    }

    initializePracticeScreen() {
        // Initialize practice UI
        console.log('Initializing practice screen');
    }

    initializeExamScreen() {
        // Initialize exam UI
        console.log('Initializing exam screen');
    }

    initializeProgressScreen() {
        // Initialize progress UI
        console.log('Initializing progress screen');
    }
}

// Create global UI manager instance
window.ui = new UIManager();