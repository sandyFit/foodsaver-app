import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URI;
        await mongoose.connect(MONGO_URL);  
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application if DB connection fails
    }
};

export default connectToMongoDB;
