// Debug script to check AI feature button clicks
console.log('🔍 Debug script loaded - checking AI feature buttons');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM loaded, checking AI feature elements...');
    
    // Check if elements exist
    const elements = {
        'smart-hints-demo': document.getElementById('smart-hints-demo'),
        'teacher-alerts-demo': document.getElementById('teacher-alerts-demo'), 
        'parent-insights-demo': document.getElementById('parent-insights-demo'),
        'test-all-features': document.getElementById('test-all-features')
    };
    
    console.log('🔍 AI Feature Elements Found:');
    Object.entries(elements).forEach(([id, element]) => {
        if (element) {
            console.log(`✅ ${id}: Found`);
            
            // Add manual click listener as backup
            element.addEventListener('click', function(e) {
                console.log(`🖱️ ${id} clicked!`);
                e.preventDefault();
                e.stopPropagation();
                
                // Call the appropriate function
                if (window.app) {
                    switch(id) {
                        case 'smart-hints-demo':
                            console.log('Calling demoSmartHints...');
                            window.app.demoSmartHints();
                            break;
                        case 'teacher-alerts-demo':
                            console.log('Calling demoStudentAlerts...');
                            window.app.demoStudentAlerts();
                            break;
                        case 'parent-insights-demo':
                            console.log('Calling showParentReport...');
                            window.app.showParentReport();
                            break;
                        case 'test-all-features':
                            console.log('Calling testNewFeatures...');
                            window.app.testNewFeatures();
                            break;
                    }
                } else {
                    console.error('❌ window.app not found!');
                }
            });
            
            // Add visual feedback
            element.style.cursor = 'pointer';
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-2px)';
                console.log(`🖱️ Hovering over ${id}`);
            });
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
            });
            
        } else {
            console.log(`❌ ${id}: NOT FOUND`);
        }
    });
    
    // Check if app is initialized
    setTimeout(() => {
        if (window.app) {
            console.log('✅ App initialized successfully');
        } else {
            console.error('❌ App not initialized after 2 seconds');
        }
    }, 2000);
});

// Also add click detection for the entire AI section
setTimeout(() => {
    const aiSection = document.querySelector('.ai-features-section');
    if (aiSection) {
        console.log('✅ AI Features Section found');
        aiSection.addEventListener('click', function(e) {
            console.log('🖱️ Click detected in AI section:', e.target);
        });
    } else {
        console.log('❌ AI Features Section NOT found');
    }
}, 1000);