// dependencies
const express = require('express');
const cors = require('cors');
// const path = require('path');

// configuration
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, "../frontend/build"))); 

// root route
app.get('/', (req, res) => {
    res.send('Welcome to the Kula Lodge App!')
});

// controller routes
const loginController = require('./conrollers/auth_controller');
app.use('/auth', loginController);

// server listen
app.listen(PORT, () => {
    console.log('We up in here on port ', PORT)
});

