// Global node requires
const path = require('path');

// Third-party npm requires

// Local requires

// Expose the root directory using module.exports.
// This grabs the file name of the main module (app.js), extrapolates the
// directory name (the root directory), and exposes it.
module.exports = path.dirname(process.mainModule.filename);