# Example: Code Generation with Rspack

This example demonstrates how to use **Rspack** for generating code at build time and executing it at runtime.

## What’s Happening in the Code

### Overview:
In this example, we use **Rspack** to generate a JavaScript file at build time that contains a dynamic function. This function is then executed at runtime.

### Code Breakdown:

1. **CodeGenPlugin.js**: 
    - This is a custom Rspack plugin responsible for generating JavaScript code at build time.
    - The plugin creates a `generated.js` file inside the `dist` folder.
    - The generated code exports a simple function `dynamicGreeting` which logs a greeting message.

2. **Rspack Configuration**:
    - The plugin is added to the `rspack.config.js` file under the `plugins` section.
    - The configuration ensures that the plugin runs at the appropriate phase during the Rspack build process.

3. **Generated Code (`generated.js`)**:
    - This file contains the generated `dynamicGreeting` function, which will be executed at runtime.
    - The code is simple: it logs a greeting message with a dynamic input.

4. **Runtime Execution (`index.js`)**:
    - The main code in `index.js` imports the `dynamicGreeting` function from `generated.js` and executes it.
    - The `generated.js` file is dynamically injected by the plugin at build time.
    - The `dynamicGreeting` function is called during runtime to display a greeting message.

### How It Works:
- **Rspack** compiles the project using the custom plugin. 
- At build time, the plugin generates `generated.js` in the `dist` folder. 
- When running the application, `index.js` imports the generated file and executes the function, which prints a dynamic greeting message to the console.

### Key Components:
- **CodeGenPlugin**: Generates the `generated.js` file.
- **Rspack Configuration**: Ensures the plugin is executed during the build process.
- **Generated Code**: Contains the `dynamicGreeting` function, which is imported and executed at runtime.
  
This setup allows code generation at build time, with the generated code being injected into the project and executed during runtime.

## Running the Example:
1. Clone the repository.
2. Run `yarn build` to generate the code.
3. Run `yarn start` to execute the application and see the greeting message in the console.
