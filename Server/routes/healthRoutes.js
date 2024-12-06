const express = require('express');
const router = express.Router();
const HealthRound2013 = require('../models/HealthRound2013');
const HealthRound2018 = require('../models/HealthRound2018');

// Route for 2013 data
router.get('/2013', async (req, res) => {
    try {
        const data = await HealthRound2013.find({});
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
        const data = await HealthRound2018.find({});
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
        subdistrict: item.subdistrict,
        agreed: item.Agreed?.percentage || 0,
        unwilling: item.Unwilling?.percentage || 0,
        notAtHome: item['Not at home']?.percentage || 0,
        incapableAcuteIllness: item['Incapable due to acute illness']?.percentage || 0,
        incapableChronicIllness: item['Incapable due to chronic illness']?.percentage || 0,
        incapableOtherReasons: item['Incapable for another reason (included < 5 years old)']?.percentage || 0,
        moved: item.Moved?.percentage || 0,
        passedAway: item['Passed away']?.percentage || 0,
        total: item.Total?.percentage || 0,
        male: item.Male?.percentage || 0,
        female: item.Female?.percentage || 0,
        malay: item.Malay?.percentage || 0,
        chinese: item.Chinese?.percentage || 0,
        indian: item.Indian?.percentage || 0,
        orangAsli: item['Orang Asli']?.percentage || 0,
        otherEthnicities: item.Other?.percentage || 0,
        nonCitizen: item['Non-citizen']?.percentage || 0,
        noFormalEducation: item['No formal education']?.percentage || 0,
        primaryEducation: item.Primary?.percentage || 0,
        secondaryEducation: item.Secondary?.percentage || 0,
        tertiaryEducation: item.Tertiary?.percentage || 0,
        doNotKnowEducation: item['Do not know']?.percentage || 0,
        refusedToAnswerEducation: item['Refused to answer']?.percentage || 0,
        age5to19: item['5 to 19']?.percentage || 0,
        age20to39: item['20 to 39']?.percentage || 0,
        age40to59: item['40 to 59']?.percentage || 0,
        age60andAbove: item['60 and above']?.percentage || 0,
        tooYoungToWork: item['Too young to work']?.percentage || 0,
        student: item.Student?.percentage || 0,
        housewife: item['Housewife / Househusband']?.percentage || 0,
        notWorking: item['Not Working']?.percentage || 0,
        casualJobs: item['Casual Jobs']?.percentage || 0,
        workingPartTime: item['Working Part-time']?.percentage || 0,
        workingFullTime: item['Working Full-Time']?.percentage || 0,
        pensioners: item['Pensioners/Pensions']?.percentage || 0,
        selfEmployed: item['Self Employed']?.percentage || 0,
        oralHealthProblems: item['Oral health problems in the last 2 weeks']?.percentage || 0,
        yesOralHealthProblems: item.Yes?.percentage || 0,
        noOralHealthProblems: item.No?.percentage || 0,
        underweight: item['underweight']?.percentage || 0,
        normalBMI: item['normal']?.percentage || 0,
        overweight: item['overweight']?.percentage || 0,
        obese1: item['obese I']?.percentage || 0,
        obese2: item['obese II']?.percentage || 0,
        obese3: item['obese III']?.percentage || 0
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
