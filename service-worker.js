const CACHE_NAME = 'firstpwa-v7';
var urlsToCache = [
	'firmanjabar.github.io/pwa-subm1',
	'firmanjabar.github.io/nav.html',
	'firmanjabar.github.io/index.html',
	'firmanjabar.github.io/pages/home.html',
	'firmanjabar.github.io/pages/challenge.html',
	'firmanjabar.github.io/pages/about.html',
	'firmanjabar.github.io/pages/contact.html',
	'firmanjabar.github.io/css/materialize.min.css',
	'firmanjabar.github.io/css/styles.css',
	'firmanjabar.github.io/js/materialize.min.js',
	'firmanjabar.github.io/js/script.js',
	'firmanjabar.github.io/img/angular.jpx',
	'firmanjabar.github.io/img/react.jpx',
	'firmanjabar.github.io/img/vue.jpx',
	'firmanjabar.github.io/img/firman.jpx',
	'firmanjabar.github.io/img/idcamp.jpx',
	'firmanjabar.github.io/img/dicoding.jpx',
	'firmanjabar.github.io/img/bekraf.jpx',
	'firmanjabar.github.io/img/background2.jpx',
	'firmanjabar.github.io/img/background3.jpx',
	'firmanjabar.github.io/manifest.json',
	'firmanjabar.github.io/icon.png'
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function (cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys()
		.then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheName != CACHE_NAME) {
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request, {
			cacheName: CACHE_NAME
		})
		.then(function (response) {
			if (response) {
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}

			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
			return fetch(event.request);
		})
	);
});