const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Solo respondemos la ruta principal "/"
  if (req.url === '/') {
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Error 404: Página no encontrada');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error interno del servidor');
        }
        return;
      }
      // Cabeceras correctas: código 200 OK y Content-Type text/html
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // Cualquier otra ruta que no sea "/"
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404: Recurso no encontrado');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor nativo activo en http://localhost:${PORT}`);
});
