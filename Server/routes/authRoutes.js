const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

// // Registration endpoint
// router.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     let user = new User({ username, password });
//     await user.save();
//     res.status(201).send('User created');
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });



router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 12);
      
      const newUser = new User({
        username,
        password: hashedPassword,
      });
      
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error registering new user', error: error });
    }
  });


// // Login endpoint
// router.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).send('User not found');
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send('Invalid credentials');
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });



router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // Assuming you're using JWT for tokens
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  






router.get('/login', async (req, res) => {
    try {
      const { username } = req.query; // Get the username from query parameters
  
      if (!username) {
        return res.status(400).json({ message: "Username query parameter is required" });
      }
  
      const user = await User.findOne({ username }, '-password'); // Exclude the password field
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
