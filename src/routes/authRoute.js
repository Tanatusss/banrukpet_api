import express from 'express';
import { login, registerPet, registerUser } from '../controllers/auth.controller.js';
import { loginSchema, registerPetSchema, registerSchema, validate } from '../validations/validations.js';
import { authCheck } from '../middlewares/auth.middleware.js';


const authRoute =  express.Router();

authRoute.post('/register/user',validate(registerSchema),registerUser)
authRoute.post('/register/pet',validate(registerPetSchema),authCheck,registerPet)
authRoute.post('/login',validate(loginSchema),login)

export default authRoute;