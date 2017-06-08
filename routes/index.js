const express = require('express');
const router = express.Router();
const deskController = require('../controllers/deskController');
const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', deskController.homePage);
router.get('/add', deskController.addDesk);
router.post('/add', catchErrors(deskController.createDesk));


module.exports = router;
