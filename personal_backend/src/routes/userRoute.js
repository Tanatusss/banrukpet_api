import express from 'express';
import { authCheck } from '../middlewares/auth.middleware.js';
import { Booking, deletePet, getAllpet, getMe, getMeBooking, updatePet, updateUser } from '../controllers/user.controller.js';
import { bookingSchema, updatePetSchema, updateSchema, validate } from '../validations/validations.js';


const userRoute = express.Router();

userRoute.post('/user/booking',authCheck,validate(bookingSchema),Booking) 
userRoute.get('/getme/pets',authCheck,getAllpet)
userRoute.get('/getme/bookings',authCheck,getMeBooking)
userRoute.get('/getme',authCheck,getMe)
userRoute.delete('/deletepet/:id',authCheck,deletePet)
userRoute.patch('/updateuser/:id',authCheck,validate(updateSchema),updateUser)
userRoute.patch('/updatepet/:id',authCheck,validate(updatePetSchema),updatePet)

export default userRoute;

