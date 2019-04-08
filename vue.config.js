module.exports = {
    lintOnSave: false,
    devServer: {
      proxy: 'http://localhost:8080',
      public: '10.190.81.79:8080',
      watchOptions: {
        poll: true
      }
    }
  }
  