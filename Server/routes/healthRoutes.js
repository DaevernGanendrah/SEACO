

































const express = require('express');
const { HealthRound2018, HealthRound2013 } = require('../models/healthModels');

const router = express.Router();

// Get 2018 data
router.get('/2018', async (req, res) => {
  try {
    const data = await HealthRound2018.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching 2018 data', error });
  }
});

// Get 2013 data
router.get('/2013', async (req, res) => {
  try {
    const rawData = await HealthRound2013.find();
    // Flatten data by extracting subdistricts and their corresponding data
    const data = rawData.map((doc) => {
      const { _id, ...subdistricts } = doc._doc; // Exclude MongoDB `_id`
      return { _id, subdistricts }; // Structure: { _id, subdistricts: { BEKOK: {...}, CHAAH: {...}, ... } }
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching 2013 data', error });
  }
});



module.exports = router;
