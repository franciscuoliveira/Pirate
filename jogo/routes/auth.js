const express = require('express');
const authControler = require('../controllers/auth')

const router = express.Router();

//Creating the routes
router.post('/register', authControler.register )


module.exports = router;