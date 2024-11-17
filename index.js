// // console.log("hola mundo desde nodejs")
// // console.log("hola mundo desde nodejs")
// // function pepito(){
// //     if(2==2){
// //         console.count("hola")
// //     }
// // }
// // pepito()

// const http = require('http');

// // Define el puerto en el que escuchará el servidor
// const port = 3000;

// // Crea el servidor
// const server = http.createServer((req, res) => {
//   // Establece el encabezado de la respuesta
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   // Envía la respuesta "¡Hola, mundo!"
//   res.end('¡Hola, mundo johansitoweb!\n');
// });

// // El servidor comienza a escuchar en el puerto especificado
// server.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
  res.render('home', { title: 'Página Principal', message: '¡Bienvenido a la Página Principal!' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de Nosotros', message: 'Esta es la página Acerca de Nosotros.' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
