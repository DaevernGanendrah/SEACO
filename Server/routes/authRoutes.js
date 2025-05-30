const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
    console.log("🟡 Login route hit");
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: "✅ Login successful", username: user.username });
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;






// const express = require('express');
// const User = require('../models/User');
// const router = express.Router();
// router.post('/login', async (req, res) => {
//      console.log("Login route hit");
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Directly compare the password sent by the client to the one in the database
//         if (password !== user.password) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // If passwords match, proceed with login success response
//         res.status(200).json({ message: "Login successful", username: user.username });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = router;




