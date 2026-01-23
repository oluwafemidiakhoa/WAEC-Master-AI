# 🔒 Firebase Security Setup Guide

## ⚠️ CRITICAL SECURITY STEPS

### 1. Configure Firebase Security Rules

**Firestore Database Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public leaderboard - read only for all users
    match /leaderboard/{document} {
      allow read: if true;
      allow create: if request.auth != null 
        && request.auth.uid != null
        && validateLeaderboardData(request.resource.data);
      allow update, delete: if false; // Prevent score tampering
    }
    
    // User profiles - private to owner
    match /users/{userId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == userId;
    }
    
    // Analytics data - private to owner
    match /analytics/{userId} {
      allow read, write: if request.auth != null 
        && request.auth.uid == userId;
    }
  }
  
  function validateLeaderboardData(data) {
    return data.keys().hasAll(['playerName', 'score', 'totalQuestions', 'subject', 'timestamp'])
      && data.playerName is string
      && data.playerName.size() <= 50
      && data.score is number
      && data.score >= 0
      && data.totalQuestions is number
      && data.totalQuestions > 0
      && data.score <= data.totalQuestions;
  }
}
```

**Firebase Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // User profile pictures
    match /users/{userId}/avatar {
      allow read: if true;
      allow write: if request.auth != null 
        && request.auth.uid == userId
        && resource.size < 5 * 1024 * 1024; // 5MB limit
    }
  }
}
```

### 2. Enable App Check (Recommended for Production)

1. Go to Firebase Console → Project Settings → App Check
2. Enable App Check for your web app
3. Use reCAPTCHA v3 for web verification
4. Add App Check to your web app initialization

### 3. Authentication Settings

1. Go to Firebase Console → Authentication → Sign-in method
2. Enable Anonymous authentication (for guest users)
3. Enable Email/Password (for registered users)
4. Configure authorized domains (add your production domain)

### 4. Security Best Practices

#### ✅ DO:
- Use Firebase Security Rules to validate all data
- Enable App Check for production
- Monitor usage in Firebase Console
- Use anonymous authentication for guest users
- Validate all user inputs on the client side

#### ❌ DON'T:
- Store sensitive data in Firestore without proper rules
- Allow unrestricted writes to any collection
- Trust client-side validation only
- Store admin credentials in client code
- Allow unlimited file uploads

### 5. API Key Security

**Important:** Firebase API keys for web apps are NOT secret keys. They are used to identify your project and are safe to include in client code. However:

1. Configure Firebase Security Rules properly
2. Use App Check to prevent abuse
3. Monitor usage for unusual activity
4. Set up billing alerts

### 6. Production Deployment Checklist

- [ ] Security Rules implemented and tested
- [ ] App Check enabled
- [ ] Authorized domains configured
- [ ] Billing alerts set up
- [ ] Usage monitoring enabled
- [ ] Analytics configured
- [ ] Error reporting enabled

### 7. Testing Security Rules

Use the Firebase Emulator Suite for local testing:

```bash
npm install -g firebase-tools
firebase login
firebase init emulators
firebase emulators:start
```

Test your rules with the Rules Playground in Firebase Console.

## 🚨 Emergency Response

If you suspect your Firebase project is compromised:

1. **Immediately disable** all authentication methods
2. **Update** all security rules to deny all access
3. **Review** recent activity in Firebase Console
4. **Contact** Firebase Support
5. **Rotate** any service account keys
6. **Enable** App Check if not already enabled

## Monitoring & Alerts

Set up these alerts in Firebase Console:
- Unusual authentication activity
- High usage spikes
- Security rule violations
- Storage quota approaching limits

---

**Remember:** Client-side Firebase configuration is public, so security depends entirely on properly configured Firebase Security Rules and App Check.