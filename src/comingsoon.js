const http = require('http');

const hostname = 'localhost';
const port = 8001;

const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<p>Coming soon ✨📖✨</p>');
});

server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});