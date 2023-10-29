const EventEmitter = require('events');
const http = require('http');

/*
const emitter = new EventEmitter();
const clickHandlerOne = () => console.log('one!');
const clickHandlerTwo = (num) => console.log(num);

emitter.on('click', clickHandlerOne);
emitter.on('click', clickHandlerTwo);

emitter.emit('click', 16);
*/

class Emitter extends EventEmitter {
  constructor() {
    super();
  }
}

const emitter = new Emitter();

const clickHandlerOne = () => console.log('one!');
const clickHandlerTwo = (num) => console.log(num);

emitter.on('click', clickHandlerOne);
emitter.on('click', clickHandlerTwo);

emitter.emit('click', 16);

/////////////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url);
  res.end('Ok');
});

server.on('request', (req, res) => {
  console.log('😎⭐😺');
});

server.on('close', () => {
  console.log('close server');
});

server.listen(8080, '127.0.0.1', () => console.log('starting...'));
