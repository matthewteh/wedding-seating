export default {
  head: {
    title: 'Wedding of Matthew & Jacelyn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A wedding seating layout just for Matthew and Jacelyn',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
    ],
  },
  router: {
    base: '/wedding-seating/',
  },
  build: {
    publicPath: 'wedding-seating/_nuxt',
    babel: {
      cacheDirectory: false,
    },
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL || 'http://localhost:3000',
    S3_BUCKET: process.env.S3_BUCKET || '',
    NEWSLETTER_API_URL: process.env.NEWSLETTER_API_URL || '',
    SHARE_STORY_API_URL: process.env.SHARE_STORY_API_URL || '',
    CLOUDFRONT_URL: process.env.CLOUDFRONT_URL || '',
    FACEBOOK_PIXEL_ID: process.env.FACEBOOK_PIXEL_ID || '',
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID || '',
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_AUTH_TOKEN: process.env.SANITY_AUTH_TOKEN,
    MARKERIO_DESTINATION: process.env.MARKERIO_DESTINATION,
    DATADOG_CLIENT_TOKEN: process.env.DATADOG_CLIENT_TOKEN || '',
    DATADOG_SERVICE_NAME: process.env.DATADOG_SERVICE_NAME || '',
    DATADOG_ENV_NAME: process.env.DATADOG_ENV_NAME || '',
    DATADOG_RUM_APP_ID: process.env.DATADOG_RUM_APP_ID || '',
    DATADOG_RUM_CLIENT_TOKEN: process.env.DATADOG_RUM_CLIENT_TOKEN || '',
    DATADOG_RUM_SERVICE_NAME: process.env.DATADOG_RUM_SERVICE_NAME || '',
  },
}
