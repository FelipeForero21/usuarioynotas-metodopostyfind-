const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/nuevos', userController.creacionDeUsuario);
router.get('/usuarios', userController.obtenerTodasLasNotas);
router.get('/usuarios/:nombres1', userController.obtenerDeterminadoUsuario);


module.exports = router;