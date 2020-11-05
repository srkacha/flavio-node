const eventEmmit = require('events');

var emitter = new eventEmmit();

// Creating the events
emitter.on('start', () => {
    console.log('Event started!');
})

emitter.on('end', () => {
    console.log('Event ended!');
})

emitter.on('print-date', (date) => {
    console.log(date);
})

emitter.on('asc-array', (from, to) => {
    let arr = Array.from(Array(to - from).keys()).map(x => {return x + from})
    console.log(arr);
})

// Triggering the events
emitter.emit('start');
emitter.emit('end');
emitter.emit('print-date', new Date());
emitter.emit('asc-array', 5, 10);

// removing all event listeners
emitter.removeAllListeners();