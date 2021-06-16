const { Dog } = require('./schemas.js');

const getDogs = () => Dog.find();

module.exports = { getDogs };
