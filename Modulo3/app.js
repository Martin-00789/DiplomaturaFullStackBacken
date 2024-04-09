const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta 1: Página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi página de inicio!');
});

// Ruta 2: Página de about
app.get('/about', (req, res) => {
  res.send('Esta es la página "Acerca de nosotros".');
});

// Ruta 3: Página de contacto
app.get('/contact', (req, res) => {
  res.send('Puedes contactarnos enviando un correo electrónico a info@ejemplo.com.');
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
