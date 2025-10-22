import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';

const connectDB = async () => {
  await mongoose
    .connect(MONGODB_URL)
    .then(() => console.log('Database connected'))
    .catch((error) => console.log(`Error connecting to DB - ${error}`));
};

export default connectDB;
