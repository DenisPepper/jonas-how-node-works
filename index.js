const { log } = require('console');
const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`${data}`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((response) => {
      console.log(response.body.message);
      fs.writeFile('dog-image.txt', response.body.message, (err) => {
        console.log('done...');
      });
    })
    .catch((err) => console.log(err.message));
});
