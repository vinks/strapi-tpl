module.exports = {
  seo: {
    enabled: true,
  },
  'rest-cache': {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::page.page"
        ],
      },
    },
  },
  /*'strapi-tiptap-editor': {
    enabled: true,
    resolve: './node_modules/strapi-tiptap-editor'
  },*/
};