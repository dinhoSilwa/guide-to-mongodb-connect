import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './src/routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 500;

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);

mongoose.connect(process.env.DB_URI, {
  useNewUrlParse : true, 
  useUnifieldTopology : true
}).then(()=> app.listen(PORT, () => console.log("Servidor Ativo")))
.catch((error) => console.log(error.message))