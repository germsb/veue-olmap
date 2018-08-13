module.exports = {
  lintOnSave: false,

  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'fr',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  pwa: {
    workboxOptions: {
      templatedUrls: {
        '/': 'index.ssr.html'
      }
    }
  }
};
