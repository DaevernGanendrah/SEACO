const express = require('express');
const { Health2018, Health2013 } = require('../models/healthModels');

const router = express.Router();

// Get 2018 data
router.get('/2018', async (req, res) => {
  try {
    const data = await Health2018.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching 2018 data', error });
  }
});

// Get 2013 data
router.get('/2013', async (req, res) => {
  try {
    const data = await Health2013.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching 2013 data', error });
  }
});

module.exports = router;
