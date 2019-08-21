// Global node requires
const path = require('path');

// Third-party npm requires
const express = require('express');

// Local requires

// Spin up the Express app by calling the express() function to create the app object.
const app = express();

// Route requires
const defaultRoutes = require('./routes/default');
const usersRoutes = require('./routes/users');

// Mount the middleware functions.
// Route favicon requests to an empty 204.
app.get('/favicon.ico', (req, res, next) => res.status(204).send());

// Set up middleware for routes.
app.use(defaultRoutes);
app.use(usersRoutes);

// Set up the 404 route to serve a generic 404 page.
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Listen on port 3000.
app.listen(3000);
