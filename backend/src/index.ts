import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 500;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.DB_URI as string).then(()=> app.listen(PORT, () => console.log("Servidor Ativo")))
.catch((error) => console.log(error.message))