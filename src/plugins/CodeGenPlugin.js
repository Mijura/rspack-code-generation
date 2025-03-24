// src/plugins/CodeGenPlugin.js

const fs = require('fs');
const path = require('path');

class CodeGenPlugin {
  constructor() {}

  apply(compiler) {
    // Use the beforeRun hook to generate the file earlier in the build process
    compiler.hooks.beforeRun.tapAsync('CodeGenPlugin', (compiler, callback) => {

        const distPath = path.resolve(compiler.options.output.path);
        const outputPath = path.resolve(distPath, 'generated.js');

        // Check if the dist folder exists, if not, create it
        if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath, { recursive: true });  // Create the dist folder and any necessary parent directories
            console.log('Created dist folder');
        }
        // Generate dynamic content
        const content = `
            export function dynamicGreeting() {
            console.log("Hello, this function was dynamically generated at build time on ${new Date().toISOString()}");
            }
        `;

        fs.writeFileSync(outputPath, content);

        console.log('Generated dynamic code in generated.js');
        callback();
    });
  }
}

module.exports = CodeGenPlugin;
