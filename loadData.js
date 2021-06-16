const fs = require('fs');
require('./db/connect');
require('colors');
const { Dog } = require('./model/schemas.js');

const allDogs = JSON.parse(fs.readFileSync('./dogs.json', 'utf8'));

(async () => {
  try {
    await Dog.insertMany(allDogs);
    console.log('Data loaded');
  } catch (error) {
    console.error(`Error => ${error.message.red}`);
  } finally {
    process.exit('SIGINT');
  }
})();

// (async () => {
//   try {
//     const p1 = Dog.create({ name: 'Bello', born: '2020-12-01' });
//     const p2 = Dog.create({ name: 'Beisser', born: '2020-12-02' });
//     await Promise.all([p1, p2]);
//     console.log('Data loaded');
//   } catch (error) {
//     console.error(`Error ====> ${error.message.red}`);
//   } finally {
//     process.exit('SIGINT');
//   }
// })();
