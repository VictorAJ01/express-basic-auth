import express from 'express';
import cors from 'cors';
import config from './config/config';
import connectDB from './config/db';
import authRoutes from './routes/auth';

const app = express();

connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = config.port;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
