import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";

// ฟังก์ชัน middleware สำหรับตรวจสอบ token JWT ใน header
export const authCheck = (req,res,next)=>{
  try{
    const header = req.headers.authorization 
    // ตรวจสอบว่ามี header authorization หรือไม่
    if(!header){
      return createError(401,"Token is missing!!")
    }
    const token = header.split(' ')[1]

    // ตรวจสอบความถูกต้องของ token
    jwt.verify(token,process.env.SECRET,(error,decode)=>{
      if(error){
        return createError(401,"Token is invalid!!!")
      }
      // ถ้า token ถูกต้อง จะเพิ่มข้อมูลผู้ใช้ลงใน req.user
      req.user = decode;
      next();
    })
  }catch(error){
    next(error);
  }
}