const address = 'wss://myserver.com/ws';
const connection = new WebSocket(address);

// when the connection is estasblished, open is triggered
connection.onopen = () => {
    // do something
    console.log("WS connection started!");
    connection.send('hey dude');
};

// when an error occurs, onerror is triggered
connection.onerror = (error) => {
    console.log(`WS error: ${error}`);
};

connection.onmessage = (event) => {
    console.log(event.data);
};


