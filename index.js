const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error interno: Archivo no encontrado');
    }
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
