module.exports = [
  // Logging and error handling
  'strapi::logger',
  'strapi::errors',

  // Security headers
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'"],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // CORS - customize as needed
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://builderbuddy.vercel.app'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      headers: '*',
    },
  },

  // Cache (optional, custom middleware)
  {
    name: 'strapi::cache',
    config: {
      enabled: true,
      type: 'memory',
      max: 1000,
      ttl: 60000, // 60s cache
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',

  // You can remove session if not needed
  // 'strapi::session',

  'strapi::favicon',
  'strapi::public',
];
