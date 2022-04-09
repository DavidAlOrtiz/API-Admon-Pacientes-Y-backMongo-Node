const express = require('express');
const router =  express.Router();
const pacientesController = require('../controllers/pacientesController')


module.exports = function(){

    router.post('/pacientes', 
        pacientesController.nuevoCliente
    );

    //Obtinene todos los datos de la BD
    router.get('/pacientes',
        pacientesController.obtenerPacientes
    );

    //Obtener un Paciente por id
    router.get('/pacientes/:id', 
        pacientesController.obtenerPacientesId
    );

    //Actualizar paciente 
    router.put('/pacientes/:id', 
        pacientesController.actualizarPaciente
    );

    //Eliminar paciente 
    router.delete('/pacientes/:id', 
        pacientesController.eliminarPaciente
    );

    return router;
}


