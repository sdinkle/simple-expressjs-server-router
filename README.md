# Simple Express.js Server using Router
This is a simple Express.js server that receives requests and process them. Demonstrates basic Express.js request handling and routing using `express.Router()` as well as public access to static files using `express.static()`. Makes use of the following npm packages:
* `express` (installed as a production dependency using `npm install express` or `npm install --save-prod express` or `npm install -P express`)
* `nodemon` (installed as a developer dependency using `npm install --save-dev nodemon` or `npm install -D nodemon`)
## App Installation and Usage
Extract files to a directory, then run `npm install` to install the necessary dependencies (or `npm install --production` to only install the `express` production dependency; useful if you already have `nodemon` installed globally, for example). Run the app using `npm start` (or `node app.js` if `nodemon` is not installed), then navigate to `localhost:3000` to view the app. Routed URLs are `localhost:3000` and `localhost:3000/users`.

---
Part of the [NodeJS - The Complete Guide](https://www.udemy.com/course/nodejs-the-complete-guide/) series.