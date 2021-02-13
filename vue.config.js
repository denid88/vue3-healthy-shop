module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "../src/assets/scss/style.scss";`
      }
    }
  }
};
