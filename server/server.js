const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Include the routes
app.use('/api', routes);

// Catch-all route to serve the Vue.js app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
