






// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const healthRoutes = require('./routes/healthRoutes');
// const path = require('path');

// const app = express();

// app.use(cors());
// // app.use(cors({
// //     origin: 'https://seaco.onrender.com', // Adjust this to your client’s domain
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     allowedHeaders: ['Content-Type', 'Authorization']
// // }));
// app.use(express.json());

// // // Connect to MongoDB
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Connected to MongoDB');
// //     app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
// //   })
// //   .catch(err => console.error(err));

// // Connect to MongoDB without deprecated options
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
//   })
//   .catch(err => console.error(err));

// // API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/health', healthRoutes);

// // Serve Static Files - Make sure this comes after your API routes
// // app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(path.join(__dirname, '../Client/build')));

// // Handle React routing, return all requests to React app
// app.get('*', (req, res) => {
//   // res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     res.sendFile(path.join(__dirname, '../Client/build', 'index.html'));
// });









// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const healthRoutes = require('./routes/healthRoutes');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection to SEACO DB
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'SEACO',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB (SEACO)');
  app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
  );
})
.catch(err => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/health', healthRoutes);

// Serve React Static Build
app.use(express.static(path.join(__dirname, '../Client/build')));

// Fallback to React App
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build', 'index.html'));
});
