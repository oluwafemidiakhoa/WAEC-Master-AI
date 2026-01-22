# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
```bash
# Serve the application locally
python -m http.server 8000
# or
npx serve .
```

### Quick Launch
```bash
# Windows batch file to open in default browser
launch-app.bat
```

## Architecture Overview

**WAEC Ace** is a Progressive Web App (PWA) for WAEC exam practice built with vanilla HTML5, CSS3, and ES6+ JavaScript using a modular architecture pattern.

### Core Application Structure

The app follows a **modular component architecture** with clear separation of concerns:

- **`WAECAceApp` (app.js)**: Main application controller managing state and coordinating between modules
- **`UIManager` (ui.js)**: Handles all UI interactions, animations, modals, and screen transitions
- **`Storage` (storage.js)**: Manages localStorage for progress tracking, exam history, and user data
- **`QuestionSelector` (selector.js)**: Implements adaptive question selection algorithm with spaced repetition
- **`Analytics` (analytics.js)**: Tracks performance metrics and learning patterns
- **`Utils` (utils.js)**: Common utilities for DOM manipulation and helper functions

### Application Flow

1. **Initialization**: App loads question data, initializes systems, and shows home screen
2. **Practice Mode**: User selects subject → topics → begins adaptive practice session
3. **Mock Exam Mode**: User configures exam settings → takes timed mixed-subject exam
4. **Progress Tracking**: All interactions are tracked and stored for adaptive learning

### Key Design Patterns

- **Module Pattern**: Each JS file exports a single class with clear responsibilities
- **Observer Pattern**: Event-driven communication between modules using custom events
- **Strategy Pattern**: Different question selection strategies (adaptive, topic-based, exam mode)
- **State Management**: Centralized state in main app class with module-specific state

### Data Architecture

**Questions Data** (`data/` folder):
- `math.json`, `english.json`, `biology.json` - Question banks with metadata
- Each question has: `question`, `options`, `answer_index`, `explanation`, `topic`, `difficulty`, `subject`, `id`

**localStorage Schema**:
- `waec_progress`: Subject/topic mastery tracking
- `waec_exam_history`: Past exam attempts and scores
- `waec_settings`: User preferences and configuration
- `waec_mistakes`: Incorrect questions for review

### PWA Features

- **Service Worker** (`sw.js`): Offline caching and background sync
- **Web App Manifest** (`manifest.json`): Installation and native app behavior
- **Responsive Design**: Works across desktop, tablet, and mobile devices

## Common Development Tasks

### Adding New Questions
1. Add questions to appropriate JSON file in `data/` folder
2. Follow existing question schema with all required fields
3. Questions are automatically loaded by `QuestionSelector`

### Modifying Practice Logic
- **Question Selection**: Edit `selector.js` adaptive algorithms
- **Progress Tracking**: Update `storage.js` methods
- **Session Management**: Modify practice methods in `app.js`

### UI Enhancements
- **Screen Management**: Add new screens via `UIManager.showScreen()`
- **Animations**: Use existing CSS classes or add to `ui.js`
- **Styling**: Main styles in `assets/styles.css` with CSS custom properties

### Analytics and Tracking
- **Performance Metrics**: Extend `analytics.js` tracking methods
- **Session Data**: All practice sessions automatically tracked
- **Progress Insights**: Calculated in real-time from localStorage data

## File Structure Reference

```
/
├── index.html              # Main app entry point
├── simple-practice.html    # Simplified practice version
├── test.html              # Quick testing interface
├── manifest.json          # PWA configuration
├── sw.js                 # Service worker for offline support
├── assets/
│   ├── app.js           # Main application logic and state
│   ├── ui.js            # UI management and interactions
│   ├── storage.js       # Data persistence layer
│   ├── selector.js      # Question selection algorithms
│   ├── analytics.js     # Performance tracking
│   ├── utils.js         # Shared utilities
│   └── styles.css       # Main stylesheet
└── data/
    ├── math.json        # Mathematics question bank
    ├── english.json     # English Language questions
    └── biology.json     # Biology question bank
```

## Important Implementation Notes

### State Management
- Practice state is managed in `app.js` `practiceState` object
- Exam state is separate in `examState` object
- UI state is handled by `UIManager` class
- Persistent data uses localStorage through `Storage` class

### Question Selection Algorithm
- Implements spaced repetition for adaptive learning
- Questions distributed by difficulty and past performance
- Weak topics automatically prioritized in practice sessions

### Offline Support
- Full offline functionality via service worker
- Questions and progress data cached locally
- Background sync for progress when back online

### Performance Considerations
- Questions loaded asynchronously on app initialization
- DOM manipulation uses efficient utility functions
- Event listeners managed to prevent memory leaks
- Animations use CSS transforms for optimal performance