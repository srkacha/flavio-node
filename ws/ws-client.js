const WebSocket = require('ws');
const url = 'wss://127.0.0.1:8080';
const connection = new WebSocket(url);

connection.onopen = () => {
    connection.send('hey server!');
}

connection.onerror = (error) => {
    console.log(`WS error: ${error.message}`);
}

connection.onmessage = (event) => {
    console.log(`Message received: ${event.data}`);
}