const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema

const Health2018 = mongoose.model('HealthRound2018', healthSchema, 'HealthRound2018');
const Health2013 = mongoose.model('HealthRound2013', healthSchema, 'HealthRound2013');

module.exports = { Health2018, Health2013 };
