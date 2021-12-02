const { Router } = require('express');
const router = Router();

const detalleMenuController = require('../controllers/detalleMenu');

router.get('/:id', detalleMenuController.renderDetalleMenu);

module.exports = router;