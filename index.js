const { log } = require('console');
const fs = require('fs');
const superagent = require('superagent');

const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFileAsync = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) reject(err);
      resolve('done...');
    });
  });
};

/* readFileAsync(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((response) => {
    console.log(response.body.message);
    return writeFileAsync('dog-image.txt', response.body.message);
  })
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message)); */

const getDogPic = async () => {
  try {
    const data = await readFileAsync(`${__dirname}/dog.txt`);
    const response = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    return await writeFileAsync('dog-image.txt', response.body.message);
  } catch (err) {
    throw new Error('error...');
  }
};

getDogPic()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
