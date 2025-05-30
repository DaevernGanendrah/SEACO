// authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// LOGIN
router.post('/login', async (req, res) => {
    console.log("🟡 Login route hit");
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

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

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Explicit password hashing
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: '✅ User registered successfully', username: newUser.username });
  } catch (error) {
    console.error('❌ Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
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




