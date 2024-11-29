const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema

const Health2018 = mongoose.model('healthround2018', healthSchema, 'healthround2018');
const Health2013 = mongoose.model('healthround2013', healthSchema, 'healthround2013');

module.exports = { Health2018, Health2013 };
