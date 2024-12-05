const express = require('express');
const { Health2013 } = require('../models/healthModels'); // Ensure the model is correctly imported

const router = express.Router();

// Route to fetch 2013 data
router.get('/2013', async (req, res) => {
  try {
    console.log('Fetching data from Health2013 collection...');
    const rawData = await Health2013.findOne(); // Assuming one document holds all subdistrict data
    if (!rawData) {
      console.log('No data found in Health2013 collection');
      return res.status(404).json({ message: 'No data found' });
    }

    const data = rawData._doc; // Extract the main document object
    console.log('Flattened Data Returned:', data);
    res.json(data); // Send the entire object for frontend processing
  } catch (error) {
    console.error('Error fetching data from Health2013:', error);
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

module.exports = router;
































// const express = require('express');
// const { Health2018, Health2013 } = require('../models/healthModels');

// const router = express.Router();

// // Get 2018 data
// router.get('/2018', async (req, res) => {
//   try {
//     const data = await Health2018.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching 2018 data', error });
//   }
// });

// // Get 2013 data
// router.get('/2013', async (req, res) => {
//   try {
//     const rawData = await Health2013.find();
//     // Flatten data by extracting subdistricts and their corresponding data
//     const data = rawData.map((doc) => {
//       const { _id, ...subdistricts } = doc._doc; // Exclude MongoDB `_id`
//       return { _id, subdistricts }; // Structure: { _id, subdistricts: { BEKOK: {...}, CHAAH: {...}, ... } }
//     });
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching 2013 data', error });
//   }
// });



// module.exports = router;
