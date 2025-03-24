const path = require('path');
const CodeGenPlugin = require('./src/plugins/CodeGenPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CodeGenPlugin(),  // Register the plugin that generates the dynamic code
  ]
};
