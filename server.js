const authRoutes = require('./auth');
app.use('/auth', authRoutes);

const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'alexnjuguna',
  password: '42201215',
  database: 'mySQL'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
