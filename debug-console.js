// WAEC Ace AI Features Debug Console
// Run these commands in your browser console to test the AI features

console.log('🧪 WAEC Ace AI Features Debug Console');
console.log('=====================================');
console.log('');
console.log('Available test commands:');
console.log('1. testSmartHints() - Test the smart hints system');
console.log('2. testTeacherDashboard() - Test teacher alerts and dashboard');  
console.log('3. testParentReports() - Test parent progress reports');
console.log('4. testAllAIFeatures() - Test everything at once');
console.log('5. checkElements() - Check if UI elements exist');
console.log('');

// Test functions that can be called from console
window.testSmartHints = function() {
    try {
        if (!window.app) {
            console.error('❌ App not initialized. Wait for page to load completely.');
            return;
        }
        
        console.log('💡 Testing Smart Hints...');
        app.demoSmartHints();
        console.log('✅ Smart hints test completed!');
    } catch (error) {
        console.error('❌ Smart hints test failed:', error);
    }
};

window.testTeacherDashboard = function() {
    try {
        if (!window.app) {
            console.error('❌ App not initialized. Wait for page to load completely.');
            return;
        }
        
        console.log('👩‍🏫 Testing Teacher Dashboard...');
        const data = app.showTeacherDashboard();
        console.log('✅ Teacher dashboard test completed!');
        return data;
    } catch (error) {
        console.error('❌ Teacher dashboard test failed:', error);
    }
};

window.testParentReports = function() {
    try {
        if (!window.app) {
            console.error('❌ App not initialized. Wait for page to load completely.');
            return;
        }
        
        console.log('👨‍👩‍👧‍👦 Testing Parent Reports...');
        const report = app.showParentReport();
        console.log('✅ Parent reports test completed!');
        return report;
    } catch (error) {
        console.error('❌ Parent reports test failed:', error);
    }
};

window.testAllAIFeatures = function() {
    try {
        if (!window.app) {
            console.error('❌ App not initialized. Wait for page to load completely.');
            return;
        }
        
        console.log('🧪 Testing All AI Features...');
        const results = app.testNewFeatures();
        console.log('✅ All AI features test completed!');
        return results;
    } catch (error) {
        console.error('❌ All AI features test failed:', error);
    }
};

window.checkElements = function() {
    console.log('🔍 Checking UI Elements...');
    
    const elements = {
        'AI Features Section': document.querySelector('.ai-features-section'),
        'Smart Hints Button': document.querySelector('#smart-hints-demo'),
        'Teacher Alerts Button': document.querySelector('#teacher-alerts-demo'),
        'Parent Reports Button': document.querySelector('#parent-insights-demo'),
        'Test All Button': document.querySelector('#test-all-features'),
        'Teacher Dashboard Nav': document.querySelector('#teacher-dashboard-btn'),
        'Parent Report Nav': document.querySelector('#parent-report-btn'),
        'App Instance': window.app,
        'Analytics Instance': window.analytics,
        'Storage Instance': window.storage
    };
    
    Object.entries(elements).forEach(([name, element]) => {
        if (element) {
            console.log(`✅ ${name}: Found`);
        } else {
            console.log(`❌ ${name}: NOT FOUND`);
        }
    });
    
    console.log('🔍 Element check completed!');
    return elements;
};

// Auto-run element check when script loads
setTimeout(() => {
    console.log('');
    console.log('🔍 Auto-checking elements after page load...');
    checkElements();
}, 2000);