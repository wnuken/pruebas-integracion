const express = require("express"),
    path = require("path"),
    app = express(),
    puerto = 3000;

app.get('/', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    let agenteDeUsuario = peticion.header("user-agent");
    respuesta.send("La ruta / solicitada con: " + agenteDeUsuario);
});
app.get('/pagina', (peticion, respuesta) => {
    // Servir archivo HTML, o cualquier otro archivo
    let rutaDeArchivo = path.join(__dirname, "plantilla.html");
    respuesta.sendFile(rutaDeArchivo);
});

app.get('/mascotas', (peticion, respuesta) => {
    let mascotas = [
        {
            nombre: "Maggie",
            edad: "2 años",
        },
        {
            nombre: "Bronco",
            edad: "5 años",
        }
    ];
    respuesta.json(mascotas);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
const server = app.listen(puerto, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${puerto}`);
});

module.exports = {
    app, 
    server
};