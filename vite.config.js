const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'component-lib-base',
      fileName: (format) => `component-lib-base.${format}.js`
    }
  }
});