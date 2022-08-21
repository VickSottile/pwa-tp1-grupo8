const knex = require('../db/conexion');

const formularioContacto = (req,resp) => {
    res.render();//renderizar la pagina de contacto
    res.send(`te envio el formulario de contacto`);

}





const selectContacto = (req,resp) => {
    knex.select('*')
    .from ('users')
    .then((response)=>{
        for(row of response){
            console.log(`${nombre} - ${barrio} - ${consulta}`);
        }
        //Aqui tendriamos que renderizar
    });
    .catch((err)=>{
        console.log(`${err}`);
    })
}




const crearContacto = (req, resp) => {
   res.send (`Contacto creado`); 
}
module.exports={
    formularioContacto,
    selectContacto,
    crearContacto
}