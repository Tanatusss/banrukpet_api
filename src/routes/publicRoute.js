import express from 'express';
import { contact, getAllServices } from '../controllers/public.controller.js';



const publicRoute = express.Router();
publicRoute.get('/getservices',getAllServices)
publicRoute.post('/contact',contact)

export default publicRoute;