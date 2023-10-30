const fs = require('fs');
const server = require('http').createServer();

// Задача - отправить большой файл на клиент

server.on('request', (req, res) => {
  /*
    Решение 1 - нельзя использовать в производственной сборке
    fs.readFile('./test-file.txt', (err, data) => {
    if (err) console.log(err);
    res.end(data);
  });
    */
  // Решение 2. res - response -это пишуший поток
  // Читающий поток всегда быстрее, чем пишуший, поэтому это решение содержит проблему обратного давления
  /*
  const readable = fs.createReadStream('./test-file.txt');
  readable
    .on('data', (chank) => {
      res.write(chank);
    })
    .on('end', () => res.end())
    .on('error', (err) => {
      console.log(err);
      res.statusCode = 500;
      res.end('File not found');
    });

    */

    //Решение 3
    //readableSource.pipe(writeableDest)
    const readable = fs.createReadStream('./test-file.txt');
    readable.pipe(res);

});

server.listen(8080, '127.0.0.1', () => console.log('starting...'));
