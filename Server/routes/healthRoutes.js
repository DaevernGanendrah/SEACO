const express = require('express');
const router = express.Router();
const { HealthRound2013, HealthRound2018 } = require('../models/healthModels');

// Route for 2013 data
router.get('/2013', async (req, res) => {
    try {
        console.log("Fetching 2013 data...");
        const data = await HealthRound2013.find({});
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No data found for 2013" });
        }
        const flattenedData = flattenData(data);
        res.status(200).json(flattenedData);
    } catch (error) {
        console.error("Error fetching 2013 data:", error);
        res.status(500).json({ message: 'Failed to fetch 2013 data' });
    }
});

// Route for 2018 data
router.get('/2018', async (req, res) => {
    try {
        console.log("Fetching 2018 data...");
        const data = await HealthRound2018.find({});
        if (!data || data.length === 0) {
            return res.status(404).json({ message: "No data found for 2018" });
        }
        const flattenedData = flattenData(data);
        res.status(200).json(flattenedData);
    } catch (error) {
        console.error("Error fetching 2018 data:", error);
        res.status(500).json({ message: 'Failed to fetch 2018 data' });
    }
});

// Utility function to flatten data
function flattenData(data) {
    return data.map(item => ({
        subdistrict: item.subdistrict || "Unknown",
        agreed: item.Agreed?.percentage || 0,
        unwilling: item.Unwilling?.percentage || 0,
        notAtHome: item['Not at home']?.percentage || 0,
        incapableAcute: item['Incapable due to acute illness']?.percentage || 0,
        incapableChronic: item['Incapable due to chronic illness']?.percentage || 0,
        incapableOther: item['Incapable for another reason (included < 5 years old)']?.percentage || 0,
        moved: item.Moved?.percentage || 0,
        passedAway: item['Passed away']?.percentage || 0,
        total: item.Total?.percentage || 0,
        male: item.Male?.percentage || 0,
        female: item.Female?.percentage || 0,
        malay: item.Malay?.percentage || 0,
        chinese: item.Chinese?.percentage || 0,
        indian: item.Indian?.percentage || 0,
        orangAsli: item['Orang Asli']?.percentage || 0,
        otherEthnicity: item.Other?.percentage || 0,
        nonCitizen: item['Non-citizen']?.percentage || 0,
        educationNoFormal: item['No formal education']?.percentage || 0,
        educationPrimary: item.Primary?.percentage || 0,
        educationSecondary: item.Secondary?.percentage || 0,
        educationTertiary: item.Tertiary?.percentage || 0,
        age5to19: item['5 to 19']?.percentage || 0,
        age20to39: item['20 to 39']?.percentage || 0,
        age40to59: item['40 to 59']?.percentage || 0,
        age60andAbove: item['60 and above']?.percentage || 0,
        oralHealthYes: item.Yes?.percentage || 0,
        oralHealthNo: item.No?.percentage || 0,
        heartDisease: item['Heart disease']?.percentage || 0,
        asthma: item.Asthma?.percentage || 0,
        stroke: item.Stroke?.percentage || 0,
        arthritis: item.Arthritis?.percentage || 0,
        everSmoked: item['Ever smoked']?.percentage || 0,
        bmiUnderweight: item['underweight']?.percentage || 0,
        bmiNormal: item['normal']?.percentage || 0,
        bmiOverweight: item['overweight']?.percentage || 0,
        bmiObese1: item['obese I']?.percentage || 0,
        bmiObese2: item['obese II']?.percentage || 0,
        bmiObese3: item['obese III']?.percentage || 0,
    }));
}

module.exports = router;

































// const express = require('express');
// const { HealthRound2018, HealthRound2013 } = require('../models/healthModels');

// const router = express.Router();

// // Get 2018 data
// router.get('/2018', async (req, res) => {
//   try {
//     const data = await HealthRound2018.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching 2018 data', error });
//   }
// });

// // Get 2013 data
// router.get('/2013', async (req, res) => {
//   try {
//     const rawData = await HealthRound2013.find();
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
