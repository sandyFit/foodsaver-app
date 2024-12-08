import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connect to the database
connectToMongoDB();

// Server setup
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} in mode: ${process.env.NODE_ENV || 'development'}`);
});
