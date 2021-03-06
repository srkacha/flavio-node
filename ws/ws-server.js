const WebSocket = require('ws');

// web socket server init
const wss = new WebSocket.Server({port: 8080});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Message received: ${message}`);
    });

    ws.send('Hey there!');
});
