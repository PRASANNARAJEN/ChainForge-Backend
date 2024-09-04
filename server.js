const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: 'https://chain-forge-forntend-griz.vercel.app/',  // Replace with your frontend's URL
    credentials: true,
}));


app.options('*', cors({
    origin: 'https://chain-forge-forntend-griz.vercel.app',
    credentials: true,
}));

app.use(express.json());

app.use('/api/auth', authRoutes         );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// ok sleep na naalaiku pakuren
