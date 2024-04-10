const { offlineFallback, warmStrategyCache } = require('workbox-recipes'); // Import utilities for offline fallback and strategy caching.
const { StaleWhileRevalidate, CacheFirst } = require('workbox-strategies'); // Import caching strategies.
const { registerRoute } = require('workbox-routing'); // Import routing module for registering routes.
const { CacheableResponsePlugin } = require('workbox-cacheable-response'); // Import plugin for caching responses.
const { ExpirationPlugin } = require('workbox-expiration'); // Import plugin for setting expiration policies.
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute'); // Import function for precaching and routing assets.

precacheAndRoute(self.__WB_MANIFEST); // Precache and route all assets defined in the Workbox manifest.

// Define a CacheFirst strategy for caching pages with specified plugins.
const pageCache = new CacheFirst({
  cacheName: 'page-cache', // Name for the cache storage.
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200], // Cache responses with these status codes.
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60, // Set maximum age for cached responses (30 days).
    }),
  ],
});

// Warm up the cache with specified URLs using the defined caching strategy.
warmStrategyCache({
  urls: ['/index.html', '/'], // URLs to warm up the cache.
  strategy: pageCache, // Strategy to use for caching.
});

// Register a route for navigating requests using the page cache strategy.
registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Implement caching for assets (JS, CSS, etc.) using a StaleWhileRevalidate strategy.
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination), // Filter requests for JS, CSS, and worker files.
  new StaleWhileRevalidate({
    cacheName: 'asset-cache', // Name for the cache storage.
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200], // Cache responses with these status codes.
      }),
    ],
  })
);
