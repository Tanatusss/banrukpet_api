import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.js"

export const listUser = async(req,res,next)=>{
  try{
    const user = await prisma.user.findMany({
      omit:{
        password: true
      }
    })
    console.log(req.user)
    res.json({
      message: "This is List All User",
      result: user
    })
  }catch(error){
    next(error)
  }
}
 

export const deleteUser = async(req,res,next)=>{
  try{
    const {id} = req.params;
    const user = await prisma.user.delete({
      where:{
        id:Number(id)
      }
    })
    res.json({message: "Delete Success"})
  }catch(error){
    next(error)
  }
}
export const createService = async(req,res,next)=>{
  try{
    const {name,description} = req.body;
    if(!name||!description){
      createError(400,"กรุณาระบุชื่อและรายละเอียดบริการ")
    }
    const service = await prisma.service.create({
      data:{
        name: name,
        description: description
      }
    })
    console.log(service)
    res.json({message: "Create service success!!! "})
  }catch(error){
    next(error)
  }
}


export const deleteService = async(req,res,next)=>{
  try{
    const {id} = req.params;
    const service = await prisma.service.delete({
      where:{
        id:Number(id)
      }
    })
    res.json({message: "Delete Success"})
  }catch(error){
    next(error)
  }
}


export const updateBookingStatus = async (req,res,next)=>{
  try{
    const{bookingId, status} = req.body;
    if(!bookingId || !status){
      createError(400,"กรุณาระบุ bookingId และ status")
    }
    const  validStatuses = ["PENDING", "APPROVE", "CANCELED"];
    if(!validStatuses.includes(status)){
      createError(400,"สถานะไม่ถูกต้อง")
    }
    const existingBooking = await prisma.booking.findUnique({
      where: { id: Number(bookingId) }
    });
    if(!existingBooking){
      createError(404,"ไม่พบการจองบริการ")
    }
    const updated = await prisma.booking.update({
      where: { id: Number(bookingId) },
      data: { status: status }
    });
    res.json({message: "Update Booking Success", booking: updated})

  }catch(error){
    next(error)
  }
}

export const getAllBooking = async(req,res,next)=> {
  try{
    const bookings = await prisma.booking.findMany({
      include: { 
        User: true, // รวมข้อมูลผู้ใช้
        bookingservice: {
          include: {  
            Service: true, // รวมข้อมูลบริการ
            Pet: true      // รวมข้อมูลสัตว์เลี้ยง
          }
        },
      }
    });
    res.json({message: "ดึงข้อมูลการจองเรียบร้อยแล้ว", bookings})
    
  }catch(error){
    next(error)
  }
}


export const deleteBooking = async(req,res,next)=>{
  try{
    const {id} = req.params;
    const booking = await prisma.booking.delete({
      where:{
        id:Number(id)
      }
    })
    res.json({message: "Delete Success"})
  }catch(error){
    next(error)
  }
}