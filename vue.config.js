const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      css: {
        modules: true
      },
      sass: {
        additionalData: `
          @import "@/styles/index.scss";
        `
      }
    }
  }
})
