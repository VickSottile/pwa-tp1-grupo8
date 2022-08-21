const { response } = require('express');
const knex = require('../db/conexion');

const formularioContacto = (req, res) => {
    res.send('Te envio el formulario para que lo completes')
}


const selectContacto = (req, res)  => {
    knex.select('*')
    .from('contactos')
    .then((response) => {
        for (row of response) {
            console.log('${nombre} - ${telefono}');
        }
    })
    .catch ((err) => {
        console.log('${err}');
    })
}

const crearContacto = (req, res) => {
    res.send('Producto creado')
}

module.exports = {
    formularioContacto,
    selectContacto,
    crearContacto
}