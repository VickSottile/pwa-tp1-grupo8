//Aqui van las rutas
/*Responde a /api/contactos */


const { Router } = require('express');
const router = Router();
const { 
    formularioContacto,
    selectContacto,
    crearContacto
} = require ('../controllers/contactosController');   //traerlo al controlador

//Hacemos dos rutas
router.get('/',formularioContacto);  //aca hacemos un select que me muestra los input
router.get('/all', selectContacto); //aca hacemos un select all
router.post('/',crearContacto); //aca tenemos que hacer un insert

module.exports = router;

