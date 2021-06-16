const { Schema, model } = require('mongoose');

const Dog = new Schema({
  name: String,
  born: Date,
});
const Dog = model('dog', dog);

module.exports = { Dog };
