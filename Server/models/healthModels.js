const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema({}, { strict: false }); // Flexible schema

const HealthRound2018 = mongoose.model('HealthRound2018', healthSchema, 'HealthRound2018');
const HealthRound2013 = mongoose.model('HealthRound2013', healthSchema, 'HealthRound2013');

module.exports = { HealthRound2018, HealthRound2013 };
