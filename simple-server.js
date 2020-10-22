const http = require('http');
const { exitCode } = require('process');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Jova brate!\n');
})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
})