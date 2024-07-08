const express = require('express');
const app = express();

const fibonacciRoutes = require('./Routes/fiboRoutes');

app.use('/api/v1', fibonacciRoutes);

app.listen(3000,() => console.log('Server is Running on Port 3000'));
