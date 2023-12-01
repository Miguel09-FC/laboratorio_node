const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Hola Mundo');
});

app.get('/MikiH',(req, res) => {
    res.send('Buenasss soy Miki que tal por aquí');
});

app.listen(3000,()=>{
    console.log('Aplicación escuchando en el puerto 3000');
});
