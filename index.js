const express = require('express');
require('dotenv'.config());
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

//Midelwares
app.use(express.json());
app.use(express.urlencodes({extended:false}));//uso a través del formulario
app.use(express.static(path.join(__dirname,'public')));

const routesContactos=require('./routes/routerContactos'); //crea la variable routesContactos para pasarselo a lo que tenemos debajao en Rutas, trayeno todo el ruteo que armamos antes

//Configurar motores de plantillas y bases de datos


//Rutas
app.use('api/contactos', routesProductos);

app.get('/', (req,res)=>{
    res.send(`Bienvenides a la app de contacto`);
    //aca podemos hacer un res.render()

});

app.listen(PORT,()=>{
    console.log(`App trabajano en el Puerto ${PORT}`);
});
