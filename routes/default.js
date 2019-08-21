// Global node requires
const path = require('path');

// Third-party npm requires
const express = require('express');

// Local requires
const rootDir = require('../util/rootDir');

// Set up Router object
const router = express.Router();

// Establish routes
// GET /
router.get('/', (req, res, next) => {
    // Respond with the default.html file located in the views folder
    res.sendFile(path.join(rootDir, 'views', 'default.html'));
});

// Expose the Router object using module.exports
module.exports = router;
