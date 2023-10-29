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

