
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://127.0.0.1:27017/Sprint2'; //si no existe la crea


Mongo.connect(URL, (error, db) => {
    if (error) throw error;

    const dbo=db.db('Sprint2');
    dbo.createCollection('contactos',(err,collection)=>{
        if(error) throw error;
    
    console.log('Coleccion de Datos Creada');
    db.close();
})
});
