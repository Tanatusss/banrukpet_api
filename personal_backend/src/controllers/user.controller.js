import { number } from "yup";
import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const Booking = async(req,res,next)=>{
  try{
    const {id} = req.user  // Get user ID from the request จาก middleware auth
    const {date,time,petId,serviceId} = req.body 
    if(!id|| !date|| !time||! petId|| !serviceId){
      createError(400,"Missing required fields")
    }

    const existingBooking = await prisma.booking.findFirst({
      where:{
        userId:id,
        date:date,
        time: time
      }
    })
    const booking = await prisma.booking.create({
      data:{
        userId:id,
        date:date,
        time:time
      }
    })
    
    const bookingService = await prisma.bookingService.findMany({
      include:{
        Service: true,
        Pet: true,
        Booking: true
      }
    })

    const createBookingService = await prisma.bookingService.create({
      data:{
        petId: Number(petId),
        bookingId: booking.id,
        serviceId: Number(serviceId)
      }
    })
   res.json({
      message: "จองสำเร็จ!!!",
      bookingCreated: booking,
      createBookingService: createBookingService
    });
  }catch(error){
    next(error)
  }
}


export const getAllpet = async(req,res,next)=>{
  try{
    const {id}= req.user;
    const pets = await prisma.pet.findMany({
      where:{
        userId:Number(id)
      }
    }
  )
  if(!pets){
    createError(400,"Pet not fouund!!!")
  }
  res.json({
    message: "ดึงข้อมูลสัตว์เเรียบร้อยแล้ว",pets
  })

  }catch(error){
    next(error)
  }
}

export const getMeBooking = async(req,res,next)=>{
  try{
    const {id}= req.user;
    console.log(id)
    const bookings = await prisma.booking.findMany({
      where:{
        userId:Number(id)
      },
      include:{
        bookingservice: {
          include:{
            Service: true,
            Pet: true
          }
        }
      }
    }
  )
  if(!bookings){
    createError(400,"Booking not fouund!!!")
  }
  res.json({
    message: "ดึงข้อมูลการจองเเรียบร้อยแล้ว",bookings
  })

  }catch(error){
    next(error)
  }
}

export const getMe = async(req,res,next)=>{
  try{
    const {id} = req.user;
    console.log(id)
    const user = await prisma.user.findFirst({
      where:{
        id:Number(id)
      },omit:{
        password:true
      }
    })
    res.json({result: user,message:"Getme Success!!!"})
  }catch(error){
    next(error)
  }
}

export const deletePet = async(req,res,next)=>{
  try{
    const {id} = req.params; // Get pet ID from the request parameters
    const userId = req.user.id; // Get user ID from the request

    const pet = await prisma.pet.findFirst({
      where:{id: Number(id), userId}
    })
    if(!pet){
      return res.json({message: 'ไม่พบสัตว์เลี้ยง'})
    }
    await prisma.pet.delete({
      where:{
        id:Number(id)
      }
    })
    res.json({message: "Delete Success"})
  }catch(error){
    next(error)
  }
}


export const updateUser = async (req, res, next) => {
  try {
    const userId = req.user.id; // จาก middleware auth
    const { name, email, phone } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        email,
        phone,
      },
    });

    res.json({
      message: 'อัปเดตข้อมูลผู้ใช้สำเร็จ',
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};


export const updatePet = async (req, res, next) => {
  try {
    const {id} = req.params;
    const userId = req.user.id;
    const {name, type , blood, age,gender,breed} = req.body
    // ตรวจสอบว่า pet นี้เป็นของ user หรือไม่
    const existingPet = await prisma.pet.findFirst({
      where:{
        id: Number(id),
        userId: userId
      }
    })
if(!existingPet) {
      return res.status(404).json({ message: 'ไม่พบสัตว์เลี้ยงนี้' });
    }
    const updatedPet = await prisma.pet.update({
      where: { id: Number(id)},
      data: {
        name,
        type,
        blood,
        breed,
        age: Number(age),
        gender
      },
    });
    res.json({
      message: 'อัปเดตข้อมูลสัตว์เลี้ยงสำเร็จ',
      pet: updatedPet,
    });
  } catch (error) {
    next(error);
  }
};