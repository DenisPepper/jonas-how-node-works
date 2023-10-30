//console.log(arguments);
//console.log(require('module').wrapper)

// module.exports
const C = require('./test-module-1.js');
const calc1 = new C();
console.log(calc1.add(1, 9));

//exports
const { add, devide, multiply } = require('./test-module-2.js');
console.log(multiply(1, 9));
