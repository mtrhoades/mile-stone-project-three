// dependencies
const express = require('express');
const router = express.Router();

const pool = require('../models/db')

// Routes

// login page route
router.get('/', async (req, res) => {
    // try {
    //     const allUsers = await pool.query(
    //         "SELECT * FROM users"
    //     );
    //     res.json(allUsers.rows);
    // } catch (err) {
    //     res.status(404).send('Error 404 PAGE NOT FOUND!')
    // }
})

// sign up 