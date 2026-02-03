// Firebase Configuration for WAEC Practice PWA
// This enables real-time leaderboard, user authentication, and data sync

/*
 * FIREBASE SETUP INSTRUCTIONS:
 * 1. Go to https://console.firebase.google.com/
 * 2. Create a new project (or use existing)
 * 3. Enable Firestore Database
 * 4. Enable Authentication (Email/Password)
 * 5. In Project Settings > General, find your Firebase config
 * 6. Replace the config below with your actual values
 * 7. In Firestore Rules, use these security rules:
 *    
 *    rules_version = '2';
 *    service cloud.firestore {
 *      match /databases/{database}/documents {
 *        // Allow read access to leaderboard for all users
 *        match /leaderboard/{document} {
 *          allow read: if true;
 *          allow create: if request.auth != null;
 *        }
 *        // User profiles only accessible by owner
 *        match /users/{userId} {
 *          allow read, write: if request.auth != null && request.auth.uid == userId;
 *        }
 *      }
 *    }
 */

// SECURITY: For production, use environment variables or secure config service
// This is visible in client code, so ensure Firebase rules are properly configured
const firebaseConfig = {
  apiKey: "AIzaSyDC5Sds376EUdRC5f8TbpJ_YS8PVMV3hzE",
  authDomain: "waec-master-ai.firebaseapp.com",
  projectId: "waec-master-ai",
  storageBucket: "waec-master-ai.firebasestorage.app",
  messagingSenderId: "781237852287",
  appId: "1:781237852287:web:34d5746d56454bf4af474a",
  measurementId: "G-J5621KT739"
};

// Enhanced Firebase Manager with Authentication
class FirebaseManager {
  constructor() {
    this.db = null;
    this.auth = null;
    this.isInitialized = false;
    this.currentUser = null;
    this.initFirebase();
  }

  async initFirebase() {
    try {
      // Try modern Firebase v9+ SDK first
      if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.auth = firebase.auth();
        
        // Initialize Analytics if available
        if (firebase.analytics) {
          this.analytics = firebase.analytics();
          console.log('Firebase Analytics initialized');
        }
        
        this.isInitialized = true;
        
        // Listen for auth state changes
        this.auth.onAuthStateChanged((user) => {
          this.currentUser = user;
          if (user) {
            console.log('User signed in:', user.uid);
            this.syncUserData();
            this.logAnalyticsEvent('user_login', { method: 'anonymous' });
          } else {
            console.log('User signed out');
          }
        });
        
        console.log('Firebase initialized with auth, firestore, and analytics');
      } else {
        console.log('Firebase not available, using local storage only');
      }
    } catch (error) {
      console.log('Firebase initialization failed, using local storage:', error);
    }
  }

  // Analytics helper method
  logAnalyticsEvent(eventName, parameters = {}) {
    if (this.analytics) {
      try {
        firebase.analytics().logEvent(eventName, parameters);
      } catch (error) {
        console.error('Analytics event failed:', error);
      }
    }
  }

  // Authentication methods
  async signInAnonymously() {
    if (!this.isInitialized) return null;
    try {
      const result = await this.auth.signInAnonymously();
      return result.user;
    } catch (error) {
      console.error('Anonymous sign in failed:', error);
      return null;
    }
  }

  async signInWithEmailPassword(email, password) {
    if (!this.isInitialized) return null;
    try {
      const result = await this.auth.signInWithEmailAndPassword(email, password);
      return result.user;
    } catch (error) {
      console.error('Email sign in failed:', error);
      return null;
    }
  }

  async createAccount(email, password, displayName) {
    if (!this.isInitialized) return null;
    try {
      const result = await this.auth.createUserWithEmailAndPassword(email, password);
      if (displayName) {
        await result.user.updateProfile({ displayName });
      }
      return result.user;
    } catch (error) {
      console.error('Account creation failed:', error);
      return null;
    }
  }

  async signOut() {
    if (!this.isInitialized) return;
    try {
      await this.auth.signOut();
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  }

  // Sync user data from local storage to Firebase
  async syncUserData() {
    if (!this.currentUser) return;
    
    try {
      // Get local stats and sync to user profile
      const localStats = JSON.parse(localStorage.getItem('waec_stats_v2') || '{}');
      const userDoc = this.db.collection('users').doc(this.currentUser.uid);
      
      await userDoc.set({
        email: this.currentUser.email,
        displayName: this.currentUser.displayName || 'Anonymous',
        stats: localStats,
        lastSync: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      
      console.log('User data synced to Firebase');
    } catch (error) {
      console.error('User data sync failed:', error);
    }
  }

  // Submit score to Firebase leaderboard
  async submitScore(playerName, score, subject, totalQuestions, timeSpent) {
    if (!this.isInitialized || !playerName) {
      return this.submitLocalScore(playerName, score, subject, totalQuestions, timeSpent);
    }

    try {
      // Auto sign in anonymously if not signed in
      if (!this.currentUser) {
        await this.signInAnonymously();
      }

      const scoreData = {
        playerName: playerName,
        score: score,
        totalQuestions: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        subject: subject,
        timeSpent: timeSpent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        device: this.getDeviceInfo(),
        userId: this.currentUser?.uid || null,
        userEmail: this.currentUser?.email || null
      };

      await this.db.collection('leaderboard').add(scoreData);
      console.log('Score submitted to Firebase leaderboard');
      
      // Log analytics event for quiz completion
      this.logAnalyticsEvent('quiz_completed', {
        subject: subject,
        score: score,
        total_questions: totalQuestions,
        percentage: scoreData.percentage,
        time_spent: timeSpent,
        player_name: playerName
      });
      
      // Also save locally as backup
      this.submitLocalScore(playerName, score, subject, totalQuestions, timeSpent);
      
      return true;
    } catch (error) {
      console.error('Firebase submission failed, saving locally:', error);
      return this.submitLocalScore(playerName, score, subject, totalQuestions, timeSpent);
    }
  }

  // Local leaderboard backup
  submitLocalScore(playerName, score, subject, totalQuestions, timeSpent) {
    try {
      const localKey = 'waec-local-leaderboard';
      const localLeaderboard = JSON.parse(localStorage.getItem(localKey) || '[]');
      
      const scoreData = {
        playerName: playerName || 'Anonymous',
        score: score,
        totalQuestions: totalQuestions,
        percentage: Math.round((score / totalQuestions) * 100),
        subject: subject,
        timeSpent: timeSpent,
        timestamp: Date.now(),
        device: this.getDeviceInfo()
      };

      localLeaderboard.push(scoreData);
      
      // Keep only top 100 scores
      localLeaderboard.sort((a, b) => b.percentage - a.percentage);
      const trimmedLeaderboard = localLeaderboard.slice(0, 100);
      
      localStorage.setItem(localKey, JSON.stringify(trimmedLeaderboard));
      return true;
    } catch (error) {
      console.error('Local leaderboard save failed:', error);
      return false;
    }
  }

  // Get top scores for a subject
  async getLeaderboard(subject = 'all', limit = 10) {
    if (this.isInitialized) {
      try {
        let query = this.db.collection('leaderboard');
        
        if (subject !== 'all') {
          query = query.where('subject', '==', subject);
        }
        
        query = query.orderBy('percentage', 'desc')
                    .orderBy('timestamp', 'desc')
                    .limit(limit);

        const snapshot = await query.get();
        const firebaseScores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          source: 'firebase'
        }));

        return firebaseScores;
      } catch (error) {
        console.error('Firebase leaderboard fetch failed, using local:', error);
      }
    }

    // Fallback to local leaderboard
    return this.getLocalLeaderboard(subject, limit);
  }

  // Get local leaderboard
  getLocalLeaderboard(subject = 'all', limit = 10) {
    try {
      const localKey = 'waec-local-leaderboard';
      const localLeaderboard = JSON.parse(localStorage.getItem(localKey) || '[]');
      
      let filteredScores = localLeaderboard;
      if (subject !== 'all') {
        filteredScores = localLeaderboard.filter(score => score.subject === subject);
      }
      
      return filteredScores.slice(0, limit).map(score => ({
        ...score,
        source: 'local'
      }));
    } catch (error) {
      console.error('Local leaderboard fetch failed:', error);
      return [];
    }
  }

  // Get device info for analytics
  getDeviceInfo() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return {
      type: isMobile ? 'mobile' : 'desktop',
      userAgent: navigator.userAgent
    };
  }

  // Get player's best scores
  async getPlayerStats(playerName) {
    if (!playerName) return null;

    try {
      const allScores = await this.getLeaderboard('all', 1000);
      const playerScores = allScores.filter(score => 
        score.playerName.toLowerCase() === playerName.toLowerCase()
      );

      if (playerScores.length === 0) return null;

      const subjects = [
        'mathematics',
        'english',
        'physics',
        'chemistry',
        'biology',
        'economics',
        'government',
        'literature',
        'geography',
        'commerce',
        'accounting',
        'agricultural_science'
      ];
      const stats = {
        totalSessions: playerScores.length,
        bestOverall: Math.max(...playerScores.map(s => s.percentage)),
        averageScore: Math.round(playerScores.reduce((sum, s) => sum + s.percentage, 0) / playerScores.length),
        subjects: {}
      };

      subjects.forEach(subject => {
        const subjectScores = playerScores.filter(s => s.subject === subject);
        if (subjectScores.length > 0) {
          stats.subjects[subject] = {
            sessions: subjectScores.length,
            best: Math.max(...subjectScores.map(s => s.percentage)),
            average: Math.round(subjectScores.reduce((sum, s) => sum + s.percentage, 0) / subjectScores.length)
          };
        }
      });

      return stats;
    } catch (error) {
      console.error('Failed to get player stats:', error);
      return null;
    }
  }

  // Real-time leaderboard listener
  onLeaderboardUpdate(callback, subject = 'all', limit = 10) {
    if (!this.isInitialized) return null;
    
    try {
      let query = this.db.collection('leaderboard');
      
      if (subject !== 'all') {
        query = query.where('subject', '==', subject);
      }
      
      query = query.orderBy('percentage', 'desc')
                  .orderBy('timestamp', 'desc')
                  .limit(limit);

      return query.onSnapshot((snapshot) => {
        const scores = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          source: 'firebase'
        }));
        callback(scores);
      });
    } catch (error) {
      console.error('Real-time leaderboard listener failed:', error);
      return null;
    }
  }

  // Get user achievements and stats
  async getUserProfile(userId = null) {
    if (!this.isInitialized) return null;
    
    const targetUserId = userId || this.currentUser?.uid;
    if (!targetUserId) return null;

    try {
      const userDoc = await this.db.collection('users').doc(targetUserId).get();
      if (userDoc.exists) {
        return userDoc.data();
      }
      return null;
    } catch (error) {
      console.error('Failed to get user profile:', error);
      return null;
    }
  }
}

// Export for use in main app
if (typeof window !== 'undefined') {
  window.FirebaseManager = FirebaseManager;
  // Backward compatibility
  window.FirebaseLeaderboard = FirebaseManager;
}
