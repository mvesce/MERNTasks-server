const express = require('express');
const router = express.Router();
const proyectoController = require('../controller/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crea proyectos
//api/proyectos
router.post('/', 
            auth,
            [
              check('nombre', 'El nombre del proyecto es obligatorio.').not().isEmpty()
            ],
            proyectoController.crearProyecto
            );

//Obtener todos los proyectos
router.get('/', 
            auth,
            proyectoController.obtenerProyectos
          );

//Actualizar un proyecto via ID
router.put('/:id', 
            auth,
            [
              check('nombre', 'El nombre del proyecto es obligatorio.').not().isEmpty()
            ],
            proyectoController.actualizarProyecto
          );

//Eliminar un proyecto via ID
router.delete('/:id', 
              auth,
              proyectoController.eliminarProyecto
            );

module.exports = router;