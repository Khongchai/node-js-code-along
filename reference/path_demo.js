const path = require(`path`);

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));
console.log(__dirname);

// File extension
console.log(path.extname(__filename));

// Create path object 
console.log(path.parse(__filename));

// Concatenate paths
// Let's say add "/test/hello.html"
//This works well with differnt delimiters; for example, the \ on mac and / on Windows for directory.
console.log(path.join(__dirname), "test", "hello.html");



//all modules are wrapped in module wrapper function
//all modules can access five parameters: exports, require, module, __filename, __dirname
//ex. console.log(__filename)