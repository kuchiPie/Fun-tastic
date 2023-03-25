import express,{json} from "express";
import dotenv from 'dotenv';
import connectDB from '../backend/config/db.js';
import colors from 'colors';
import userRouter from './routes/userRoutes.js'

const app = express()
dotenv.config();
connectDB();

app.use(json());  
const PORT = process.env.PORT || 4000  
app.use('/api/user',userRouter);
app.get('/',(req,res)=>{
    res.send('SERVER RUNNING');
})


app.listen(PORT, console.log(`Server started on PORT ${PORT} : http://localhost:${PORT}/`.blue.bold));