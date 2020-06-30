importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
workbox.precaching.precacheAndRoute([{
  url: '/',
  revision: '7'
},
{
  url: 'index.html',
  revision: '7'
},
{
  url: 'navigasi.html',
  revision: '7'
},
{
  url: 'pages/matches.html',
  revision: '7'
},
{
  url: 'pages/teams.html',
  revision: '7'
},
{
  url: 'pages/saved.html',
  revision: '7'
},
{
  url: 'pages/standings.html',
  revision: '7'
},
{
  url: 'css/custom.css',
  revision: '7'
},
{
  url: 'css/materialize.min.css',
  revision: '7'
},
{
  url: 'manifest.json',
  revision: '7'
},
{
  url: 'js/navigasi.js',
  revision: '7'
},
{
  url: 'js/api.js',
  revision: '7'
},
{
  url: 'js/idb.js',
  revision: '7'
},
{
  url: 'js/db.js',
  revision: '7'
},
{
  url: 'image/football-96.png',
  revision: '7'
},
{
  url: 'pages/teamdetail.html',
  revision: '7'
},
{
  url: 'image/football-192.png',
  revision: '7'
},
{
  url: 'image/iconweb.png',
  revision: '7'
},
{
  url: 'image/football-512.png',
  revision: '7'
},
{
  url: 'image/football-144.png',
  revision: '7'
},
{
  url: 'js/reg-sw.js',
  revision: '7'
}
], {
// Ignore all URL parameters.
ignoreUrlParametersMatching: [/.*/]
});
  
workbox.routing.registerRoute(
  new RegExp('https://api.football-data.org/v2/'),
  workbox.strategies.staleWhileRevalidate()
);

workbox.routing.registerRoute(
  /.*(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ]
  })
);

workbox.routing.registerRoute(
  new RegExp("/"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "EPL"
  })
);

self.addEventListener("push", function (event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = "Push message no payload";
  }

  var options = {
    body: body,
    icon: 'image/football-192.png',
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