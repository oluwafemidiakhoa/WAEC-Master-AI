# WAEC Practice PWA (Demo)

Offline-first WAEC practice app built with plain HTML, CSS, and JavaScript. It loads demo placeholder questions from JSON files and supports practice or timed exam mode.

## Features
- Subject selector (Mathematics, English, Physics, Chemistry, Biology)
- Topic filtering per subject
- Practice mode and timed exam mode
- Progress bar, explanations, and score summary
- Streaks, daily goal tracking, and weak-topic breakdown
- Missed-question review mode and topic dashboard
- Offline support via a service worker with cached data
- PWA-ready manifest with placeholder icons

## Local preview
Because this app uses `fetch()` for JSON files and a service worker, you should run it from a local server.

Example (Python 3):

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## GitHub Pages deployment
1. Commit the project to a GitHub repository.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or `master`) and `/root`
4. Save. GitHub will give you a Pages URL.
5. Open the Pages URL. The PWA manifest and service worker use relative paths, so they work on GitHub Pages subpaths.

## Content note
All questions are original placeholder demo items. Do not insert copyrighted WAEC past questions.
# WAEC-Master-AI
