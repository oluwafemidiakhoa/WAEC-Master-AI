# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Advanced WAEC Practice PWA** - a sophisticated offline-first Progressive Web Application for West African Examinations Council practice questions. The app is built with **vanilla HTML, CSS, and JavaScript** (no frameworks) and includes advanced AI-powered features, gamification, analytics, and comprehensive accessibility support.

## Architecture

### Core Components
- **Frontend**: Single-page application in `index.html` with advanced modular sections (setup, quiz, dashboard, summary, analytics, achievements, social)
- **Main Logic**: `js/app.js` - Enhanced application with AI integration, gamification, and advanced features
- **AI Engine**: `js/ai-engine.js` - Adaptive learning algorithms, performance analysis, and personalized recommendations
- **Achievement System**: `js/achievements.js` - Comprehensive gamification with badges, progress tracking, and motivation
- **Voice Engine**: `js/voice-engine.js` - Text-to-speech narration and accessibility features
- **Analytics Engine**: `js/analytics.js` - Advanced performance tracking, data visualization with Chart.js
- **Service Worker**: `service-worker.js` - Enhanced offline caching with CDN asset management
- **Styling**: `css/styles.css` - Advanced CSS with dark/light themes, animations, and responsive design
- **Data**: `data/` directory contains JSON files with practice questions per subject

### Advanced Features
- **AI-Powered Learning**: Adaptive difficulty adjustment, personalized question recommendations, learning pattern analysis
- **Comprehensive Analytics**: Performance trends, time-based insights, topic mastery visualization with charts
- **Gamification System**: 15+ achievement badges, leaderboards, challenges, progress tracking
- **Accessibility**: Voice narration, keyboard shortcuts, high contrast support, screen reader compatibility
- **Theme System**: Auto/light/dark themes with system preference detection
- **Social Features**: Mock leaderboards, study groups, challenges (ready for real backend integration)
- **Advanced PWA**: Enhanced offline support, installable app, background sync ready
- **Rich Animations**: Smooth transitions, micro-interactions, accessibility-aware animations

### Key Features
- **Subject Support**: Mathematics, English, Physics, Chemistry, Biology with AI-curated questions
- **Practice Modes**: Standard practice mode, timed exam mode, and review mode for missed questions
- **Advanced Progress Tracking**: Daily streaks, goal tracking, comprehensive analytics, learning velocity tracking
- **Offline Support**: Full functionality works offline with enhanced caching strategy
- **PWA Features**: Installable app with manifest, push notification ready, responsive design

### Data Structure
Questions are stored as JSON arrays in `data/{subject}.json` with structure:
```json
{
  "id": number,
  "topic": string,
  "question": string, 
  "options": [string, string, string, string],
  "answer": number,
  "explanation": string
}
```

### State Management
Application state is managed across multiple engines:
- **Main App State**: Core quiz functionality, UI state, session tracking
- **AI Engine**: Learning patterns, user profiling, difficulty adjustments
- **Achievement System**: Badge progress, unlocked achievements, user statistics
- **Analytics Engine**: Performance history, session data, trend analysis
- **Voice Engine**: Speech synthesis settings, accessibility preferences
- **Local Storage**: Persistent user data across sessions
- **Service Worker Cache**: Offline question data and app assets

## Development Commands

### Local Server
Since the app uses `fetch()` for JSON files and includes a service worker, it must be served from a local HTTP server:

```bash
# Python 3 (recommended in README)
python3 -m http.server 8080

# Node.js alternatives
npx http-server -p 8080
npx serve -p 8080
```

Access at `http://localhost:8080`

### No Build Process
This project uses **no build tools** - it's advanced vanilla HTML/CSS/JS that runs directly in the browser. The sophisticated features are built using modern web APIs and advanced JavaScript patterns without requiring compilation or bundling.

### Dependencies
- **Chart.js**: Loaded from CDN for analytics visualization
- **Firebase SDK**: Real-time database, authentication, and analytics (optional)
- **Web APIs**: Speech Synthesis, Service Workers, localStorage, IndexedDB-ready
- **Progressive Enhancement**: All features degrade gracefully for older browsers

### Firebase Integration
- **Leaderboard**: Real-time score sharing with security rules
- **User Authentication**: Anonymous and email/password sign-in
- **Analytics**: Track user engagement and performance metrics
- **Progressive Enhancement**: Works offline with local storage fallback

### No Testing Framework
Currently **no automated tests** are configured. The app is thoroughly tested manually across:
- Multiple browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices and responsive breakpoints
- Accessibility tools and screen readers
- Offline functionality and PWA features

## File Organization

```
/
├── index.html          # Main application entry point with advanced UI
├── manifest.json       # Enhanced PWA manifest
├── service-worker.js   # Advanced offline functionality with CDN caching
├── css/
│   └── styles.css      # Comprehensive styles with themes and animations
├── js/
│   ├── app.js          # Main application with all integrations
│   ├── ai-engine.js    # Adaptive learning and AI features
│   ├── achievements.js # Gamification and badge system
│   ├── voice-engine.js # Text-to-speech and accessibility
│   ├── analytics.js    # Performance tracking and visualization
│   └── firebase-config.js # Firebase integration and real-time features
├── data/               # Enhanced question databases
│   ├── mathematics.json
│   ├── english.json
│   ├── physics.json
│   ├── chemistry.json
│   └── biology.json
└── icons/              # PWA icons
    ├── icon-192.png
    └── icon-512.png
```

## Key Implementation Details

### Service Worker Caching Strategy
- **App Assets**: All JavaScript modules cached on install for offline access
- **Question Data**: Cache-first with background updates for optimal performance
- **CDN Assets**: Chart.js and external dependencies cached locally
- **Cache Versioning**: Uses `v2.0.0` version scheme with automatic cleanup

### Local Storage Schema
- **`waec_stats_v2`**: Enhanced user statistics, streaks, comprehensive topic performance
- **`waec_last_summary_v2`**: Last session summary with AI insights
- **`waec_user_profile_v1`**: AI learning profile and preferences
- **`waec_achievements_v1`**: Badge progress and gamification data
- **`waec_analytics_v1`**: Detailed performance analytics and session history
- **`waec_voice_settings_v1`**: Voice narration preferences and settings
- **`waec_theme_v1`**: Theme preference (auto/light/dark)
- **`waec-local-leaderboard`**: Backup leaderboard when Firebase unavailable

### Browser Compatibility
- Requires modern browser with ES6+ support
- Service Worker support required for offline functionality
- Uses fetch API, CSS variables, and modern DOM APIs

## Deployment

### GitHub Pages
Project is configured for GitHub Pages deployment:
1. Push to main branch
2. Enable Pages in repository settings
3. Deploy from branch `/root`
4. All paths are relative and work on subpaths

## Content Guidelines
- All questions are **demo placeholders only**
- **Never add copyrighted WAEC past questions**
- Maintain educational focus with proper explanations

## Firebase Security
- **Client keys are public**: Firebase web SDK keys are safe in client code
- **Security rules**: All data protection happens in Firestore security rules
- **Files included**: `firestore.rules`, `FIREBASE_SECURITY.md`, `.env.example`
- **Rate limiting**: Max 5 leaderboard submissions per user per hour
- **Data validation**: All inputs validated before storage
- **Authentication**: Anonymous users for guests, email/password for accounts

## Firebase Integration

### Security Configuration
The app includes Firebase integration for real-time leaderboards, user authentication, and analytics. **Security is critical**:

#### Firestore Security Rules
- Comprehensive validation rules in `firestore.rules`
- Rate limiting (max 5 submissions per user per hour)
- Data validation for all user inputs
- Private user profiles with auth-based access control
- Public read access for leaderboard viewing

#### Environment Variables
- Use `.env.example` as template for local configuration
- **NEVER commit actual API keys to git**
- Firebase client SDK keys are safe to expose (with proper Firestore rules)
- Always use proper Firestore security rules for data protection

#### Analytics Tracking
- Quiz completion events with performance metrics
- User engagement tracking
- Subject-wise performance analytics
- Anonymous user tracking for privacy

### Deployment Security Checklist
1. ✅ Deploy Firestore security rules from `firestore.rules`
2. ✅ Enable Firebase App Check in production
3. ✅ Configure rate limiting in Firebase console  
4. ✅ Review security rules with Firebase simulator
5. ✅ Monitor usage in Firebase console
6. ✅ Enable audit logging for security monitoring