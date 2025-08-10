import express from "express";
import morgan from "morgan";
import authRoute from "./src/routes/authRoute.js";
import adminRoute from "./src/routes/adminRoute.js";
import userRoute from "./src/routes/userRoute.js";
import cors from 'cors';
import publicRoute from "./src/routes/publicRoute.js";




const app = express();// Create an Express application



app.use(cors()) // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Logging middleware

app.use('/public',publicRoute) 
app.use('/auth',authRoute);
app.use('/api',adminRoute);
app.use('/api',userRoute);



const PORT = 8000;
// Start the server on port 8000
app.listen(PORT,()=> console.log(`Server is running on ${PORT}`)) 