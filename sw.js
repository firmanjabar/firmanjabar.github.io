importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([{
        url: '/index.html',
        revision: '1'
    },
    {
        url: '/manifest.json',
        revision: '1'
    },
    {
        url: '/css/materialize.min.css',
        revision: '1'
    },
    {
        url: '/css/styles.css',
        revision: '2'
    },
    {
        url: '/js/materialize.min.js',
        revision: '1'
    },
    {
        url: '/js/ui.js',
        revision: '1'
    },
    {
        url: '/js/app.js',
        revision: '1'
    },
]);

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate()
);