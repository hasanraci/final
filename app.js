const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./schoolRoutes');
const buildingRoutes = require('./buildingRoutes');
const streetRoutes = require('./streetRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api/schools', schoolRoutes);
app.use('/api/buildings', buildingRoutes);
app.use('/api/streets', streetRoutes);

// Star Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
