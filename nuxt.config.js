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

  build: {
    babel: {
      cacheDirectory: false,
    },
  },
}
