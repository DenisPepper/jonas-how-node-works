//console.log(arguments);
//console.log(require('module').wrapper)

// module.exports
const C = require('./test-module-1.js');
const calc1 = new C();
console.log(calc1.add(1, 9));

//exports
const calc2 = require('./test-module-2.js');
console.log(calc2.multiply(1, 9));
