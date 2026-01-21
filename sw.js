// WAEC Ace Service Worker
// Provides offline functionality and caching for better performance

const CACHE_NAME = 'waec-ace-v1.2.0';
const STATIC_CACHE = 'waec-ace-static-v1.2.0';
const DYNAMIC_CACHE = 'waec-ace-dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/styles.css',
  '/assets/app.js',
  '/assets/storage.js',
  '/assets/selector.js',
  '/assets/analytics.js',
  '/assets/ui.js',
  '/assets/utils.js',
  '/data/math.json',
  '/data/english.json',
  '/data/biology.json',
  // Google Fonts
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.woff2',
  'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2'
];

// Dynamic assets (images, icons, etc.)
const DYNAMIC_ASSETS = [
  '/icons/',
  '/screenshots/',
  '/favicon.ico'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker');
  
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle different types of requests
  if (isStaticAsset(url.pathname)) {
    // Static assets: Cache First strategy
    event.respondWith(cacheFirst(request));
  } else if (isDataFile(url.pathname)) {
    // Data files: Network First strategy
    event.respondWith(networkFirst(request));
  } else if (isGoogleFont(url.origin)) {
    // Google Fonts: Cache First strategy
    event.respondWith(cacheFirst(request));
  } else {
    // Other requests: Network First with fallback
    event.respondWith(networkFirst(request));
  }
});

// Cache First strategy - good for static assets
async function cacheFirst(request) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('[SW] Cache First failed:', error);
    return caches.match('/index.html');
  }
}

// Network First strategy - good for dynamic content
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return caches.match('/index.html');
    }
    
    throw error;
  }
}

// Helper functions
function isStaticAsset(pathname) {
  return pathname.includes('/assets/') || 
         pathname.includes('/icons/') ||
         pathname.includes('/screenshots/') ||
         pathname === '/' ||
         pathname === '/index.html' ||
         pathname === '/manifest.json' ||
         pathname === '/favicon.ico';
}

function isDataFile(pathname) {
  return pathname.includes('/data/') && pathname.endsWith('.json');
}

function isGoogleFont(origin) {
  return origin === 'https://fonts.googleapis.com' || 
         origin === 'https://fonts.gstatic.com';
}

// Handle background sync for offline actions
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'progress-sync') {
    event.waitUntil(syncProgressData());
  } else if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalyticsData());
  }
});

// Sync progress data when back online
async function syncProgressData() {
  try {
    // Get pending progress updates from IndexedDB
    const pendingUpdates = await getPendingProgressUpdates();
    
    if (pendingUpdates.length > 0) {
      console.log('[SW] Syncing', pendingUpdates.length, 'progress updates');
      
      // Process each update
      for (const update of pendingUpdates) {
        await processPendingUpdate(update);
      }
      
      // Clear processed updates
      await clearPendingUpdates();
      
      // Notify app of successful sync
      notifyClients({ type: 'PROGRESS_SYNCED', count: pendingUpdates.length });
    }
  } catch (error) {
    console.error('[SW] Progress sync failed:', error);
  }
}

// Sync analytics data
async function syncAnalyticsData() {
  try {
    console.log('[SW] Syncing analytics data...');
    // Implementation for analytics sync
    notifyClients({ type: 'ANALYTICS_SYNCED' });
  } catch (error) {
    console.error('[SW] Analytics sync failed:', error);
  }
}

// Notify all clients
function notifyClients(message) {
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage(message);
    });
  });
}

// Handle messages from the app
self.addEventListener('message', event => {
  const { type, data } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0].postMessage({ version: CACHE_NAME });
      break;
      
    case 'CACHE_QUESTION_DATA':
      cacheQuestionData(data);
      break;
      
    case 'PREFETCH_RESOURCES':
      prefetchResources(data.urls);
      break;
      
    default:
      console.log('[SW] Unknown message type:', type);
  }
});

// Cache question data for offline use
async function cacheQuestionData(questionData) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const response = new Response(JSON.stringify(questionData), {
      headers: { 'Content-Type': 'application/json' }
    });
    await cache.put('/data/cached-questions.json', response);
    console.log('[SW] Cached question data for offline use');
  } catch (error) {
    console.error('[SW] Failed to cache question data:', error);
  }
}

// Prefetch resources
async function prefetchResources(urls) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    await Promise.all(
      urls.map(async url => {
        try {
          const response = await fetch(url);
          if (response.status === 200) {
            await cache.put(url, response);
          }
        } catch (error) {
          console.warn('[SW] Failed to prefetch:', url);
        }
      })
    );
    console.log('[SW] Prefetched', urls.length, 'resources');
  } catch (error) {
    console.error('[SW] Prefetch failed:', error);
  }
}

// Placeholder functions for IndexedDB operations
// These would be implemented with a proper IndexedDB library
async function getPendingProgressUpdates() {
  // Implementation would read from IndexedDB
  return [];
}

async function processPendingUpdate(update) {
  // Implementation would process the update
  console.log('[SW] Processing update:', update);
}

async function clearPendingUpdates() {
  // Implementation would clear processed updates from IndexedDB
  console.log('[SW] Cleared pending updates');
}

// Push notification handling (for future implementation)
self.addEventListener('push', event => {
  console.log('[SW] Push received:', event);
  
  const options = {
    body: 'Time for your daily WAEC practice! 📚',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 'practice-reminder'
    },
    actions: [
      {
        action: 'practice',
        title: 'Start Practice',
        icon: '/icons/icon-96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-96.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('WAEC Ace Reminder', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click:', event);
  
  event.notification.close();
  
  if (event.action === 'practice') {
    event.waitUntil(
      clients.openWindow('/?mode=practice')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[SW] Service Worker loaded successfully');