import express from 'express';
import { createService, deleteBooking, deleteService, deleteUser, getAllBooking, listUser, updateBookingStatus } from '../controllers/admin.controller.js';
import { authCheck } from '../middlewares/auth.middleware.js';
import { isAdmin } from '../middlewares/admin.middleware.js';


const adminRoute = express.Router();

adminRoute.get('/admin/users',authCheck,isAdmin,listUser);
adminRoute.delete('/admin/delete/:id',authCheck,isAdmin,deleteUser)
adminRoute.post('/admin/service',authCheck,isAdmin,createService)
adminRoute.delete('/admin/service/:id',authCheck,isAdmin,deleteService)
adminRoute.patch('/admin/booking/status',authCheck,isAdmin,updateBookingStatus)
adminRoute.get('/admin/getallbooking',authCheck,isAdmin,getAllBooking)
adminRoute.delete('/admin/deletebooking/:id',authCheck,isAdmin,deleteBooking)

export default adminRoute;