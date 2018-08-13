const compress = require('koa-compress');

module.exports = {
  ssr: {
    server(app) {
      // `app` is the Koa instance here
      app.use(compress());
    },
  },
  plugins: {
    map: {
      src: "@/plugins/OlMap.js",
      ssr: false
    }
  }
};