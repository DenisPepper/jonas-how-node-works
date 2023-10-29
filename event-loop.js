const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

setTimeout(() => console.log('1. setTimeout'), 0);
setImmediate(() => console.log('2. setImmediate'));

fs.readFile('./test-file.txt', () => {
  console.log('3. readFile');

  setTimeout(() => console.log('4. setTimeout'), 0);
  setTimeout(() => console.log('5. setTimeout'), 3000);
  setImmediate(() => console.log('6. setImmediate'));

  process.nextTick(() => console.log('7. nextTick'));

  /*
  Шифрование будет автомвтически выгружено циклом событий в трэд-пул (4 трэда по умолчанию)
  поэтому, 4 операции будут выполняться параллельно с, примерно, одинаковым временем.

  для ОС windows из кода программы количество параллельных трэд-пулов изменить не получится
  поэтому, перед запуском программы, в powershell можно установить размер трэд-пула командой $env:UV_THREADPOOL_SIZE = OS.cpus().length
  OS.cpus().length - это количество ядер процессора на сервере (const OS = require('os');)
  */
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => console.log(Date.now() - start, '8. crypto'));
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => console.log(Date.now() - start, '8. crypto'));
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => console.log(Date.now() - start, '8. crypto'));
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => console.log(Date.now() - start, '8. crypto'));
});

console.log('4. top-level code');
