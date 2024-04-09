const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta con parámetro
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}! Bienvenido a mi página.`);
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
