import prisma from "../config/prisma.js"


export const getAllServices = async (req, res, next) => {
  try {
    const services = await prisma.service.findMany()
    res.json({ message:"ดึงข้อมูลบริการเเรียบร้อยแล้ว",services })
  } catch (error) {
    next(error)
  }
}

export const contact = async (req,res,next) => {
  try{
    const {name,email,note} = req.body;
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        note
      }
    })
    res.json({ message: "ส่งข้อมูลติดต่อเรียบร้อยแล้ว", contact })
  }catch(error){
    next(error)
  }
}