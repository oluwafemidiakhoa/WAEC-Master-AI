# 🚀 Firebase Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Firebase Project Setup
- [ ] Create Firebase project at https://console.firebase.google.com
- [ ] Enable Firestore Database
- [ ] Enable Authentication (Anonymous + Email/Password)
- [ ] Enable Analytics
- [ ] Configure authorized domains

### 2. Security Configuration
- [ ] Deploy Firestore security rules from `firestore.rules`
- [ ] Test rules with Firebase Emulator
- [ ] Enable App Check for production
- [ ] Set up billing alerts

### 3. Environment Setup
- [ ] Copy `.env.example` to `.env`
- [ ] Add your Firebase configuration values
- [ ] Verify `.env` is in `.gitignore`

## 🔧 Step-by-Step Deployment

### Step 1: Firebase Console Setup

1. **Create Project**
   ```
   Go to: https://console.firebase.google.com
   Click: "Create a project"
   Name: "waec-master-ai" (or your preferred name)
   ```

2. **Enable Services**
   ```
   Firestore Database:
   - Go to Firestore Database
   - Click "Create database"
   - Start in test mode (we'll secure it later)
   - Choose location closest to users
   
   Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Anonymous"
   - Enable "Email/Password"
   
   Analytics:
   - Should be enabled by default
   - Configure if prompted
   ```

### Step 2: Security Rules Deployment

1. **Copy Firestore Rules**
   ```bash
   # In Firebase Console > Firestore Database > Rules
   # Copy contents of firestore.rules file
   ```

2. **Test Rules**
   ```bash
   # Use Rules Simulator in Firebase Console
   # Test various scenarios:
   # - Anonymous user reading leaderboard ✅
   # - Authenticated user creating entry ✅
   # - User accessing another's profile ❌
   ```

3. **Deploy Rules**
   ```bash
   # Click "Publish" in Firebase Console
   ```

### Step 3: App Configuration

1. **Get Firebase Config**
   ```bash
   # In Firebase Console > Project Settings > General
   # Scroll to "Your apps" section
   # Click "Web" icon to add web app
   # Copy the config object
   ```

2. **Update Configuration**
   ```javascript
   // Already done in js/firebase-config.js
   // Config is safely included in code
   ```

### Step 4: Domain Configuration

1. **Authorized Domains**
   ```bash
   # Firebase Console > Authentication > Settings > Authorized domains
   # Add your domains:
   # - localhost (for development)
   # - your-domain.com (for production)
   # - your-app.github.io (if using GitHub Pages)
   ```

### Step 5: App Check (Production)

1. **Enable App Check**
   ```bash
   # Firebase Console > Project Settings > App Check
   # Register your web app
   # Choose reCAPTCHA v3
   # Add site key to your app
   ```

## 🌐 Hosting Options

### Option 1: Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 2: GitHub Pages
```bash
# Already configured
# Just push to main branch
# Enable Pages in repository settings
```

### Option 3: Netlify/Vercel
```bash
# Connect your Git repository
# Build command: (none - static files)
# Publish directory: /
```

## 📊 Monitoring & Analytics

### Firebase Console Monitoring
- **Authentication**: Track user signups and activity
- **Firestore**: Monitor read/write operations
- **Analytics**: User engagement and app performance
- **Performance**: Page load times and app responsiveness

### Key Metrics to Watch
- Daily active users
- Quiz completion rates
- Average session duration
- Leaderboard submission frequency
- Error rates

## 🚨 Security Best Practices

### Production Security Checklist
- [ ] Firestore rules deployed and tested
- [ ] App Check enabled
- [ ] Authorized domains configured
- [ ] Billing alerts set up
- [ ] Regular security rule audits
- [ ] Monitor for unusual activity

### Ongoing Maintenance
- **Weekly**: Review Firebase usage and costs
- **Monthly**: Audit security rules and user activity
- **Quarterly**: Update Firebase SDK versions
- **As needed**: Scale up/down based on usage

## 💰 Cost Management

### Free Tier Limits (2024)
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Authentication**: Unlimited for email/password and anonymous
- **Analytics**: Unlimited events
- **Hosting**: 10GB storage, 360MB/day transfer

### Cost Optimization Tips
1. **Efficient Queries**: Minimize Firestore reads
2. **Local Caching**: Use localStorage for frequently accessed data
3. **Batch Operations**: Group multiple writes together
4. **Monitor Usage**: Set up billing alerts

## 🔍 Troubleshooting

### Common Issues

**Firebase not loading:**
```javascript
// Check browser console for errors
// Verify Firebase scripts are loaded
// Check network connectivity
```

**Authentication fails:**
```javascript
// Check authorized domains
// Verify API keys
// Check browser developer tools
```

**Firestore permission denied:**
```javascript
// Review security rules
// Check user authentication status
// Verify data structure matches rules
```

**App Check failures:**
```javascript
// Verify reCAPTCHA configuration
// Check domain registration
// Review App Check debug tokens
```

## 📞 Support Resources

- **Firebase Documentation**: https://firebase.google.com/docs
- **Community Support**: https://stackoverflow.com/questions/tagged/firebase
- **Official Support**: Firebase Console > Support
- **Status Page**: https://status.firebase.google.com

---

## 🎯 Success Criteria

Your deployment is successful when:
- [ ] Users can submit scores to leaderboard
- [ ] Real-time updates work properly  
- [ ] Authentication flows smoothly
- [ ] App works offline with local fallback
- [ ] Security rules prevent unauthorized access
- [ ] Performance metrics show good engagement

**Estimated Setup Time**: 30-60 minutes for basic deployment