const express = require('express');
const router = express.Router();
const tareaController = require('../controller/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

//Crea tareas
//api/tareas
router.post(
    '/', 
    auth,
    [
      check('nombre', 'El nombre de la tarea es obligatorio.').not().isEmpty(),
      check('proyecto', 'El proyecto es obligatorio.').not().isEmpty(),
    ],
    tareaController.crearTarea
);

//Obtener las tareas
router.get(
  '/', 
  auth,
  tareaController.obtenerTareas
);

//Actualizar una tarea via ID
router.put(
  '/:id', 
    auth,
    tareaController.actualizarTarea
);

//Eliminar una tarea via ID
router.delete(
  '/:id', 
    auth,
    tareaController.eliminarTarea
);

module.exports = router;