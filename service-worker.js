importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([{
    url: '/index.php',
    revision: '3'
  },
  {
    url: '/about.php',
    revision: '3'
  },
  {
    url: '/manifest.json',
    revision: '3'
  },
  {
    url: '/contact.php',
    revision: '3'
  },
  {
    url: '/assets/css/bootstraps.min.css',
    revision: '3'
  },
  {
    url: '/assets/js/bootstraps.min.js',
    revision: '3'
  },
  {
    url: '/assets/js/main.js',
    revision: '3'
  }
]);

workbox.routing.registerRoute(
  new RegExp('/assets/css/'),
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp('/assets/fonts/'),
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp('/assets/images/'),
  workbox.strategies.staleWhileRevalidate()
);
workbox.routing.registerRoute(
  new RegExp('/assets/js/'),
  workbox.strategies.staleWhileRevalidate()
);

self.addEventListener('push', function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'img/notification.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});