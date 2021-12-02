const { Router } = require('express');
const router = Router();

const indexController = require('../controllers/index');

router.get('/', indexController.renderIndex);

module.exports = router;