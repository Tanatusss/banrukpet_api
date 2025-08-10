import {number, object, ref, string} from 'yup';

export const registerSchema =  object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณาใส่อีเมลล์ให้ถูกต้อง"),
  name: string().min(6,"ชื่อต้องมีมากกว่า 6 อักขระ"),
  phone: string().min(10).max(10).required(),
  password: string().min(6,"รหัสผ่านต้องมากกว่า 5"),
  confirmPassword: string().oneOf([ref("password"),null],"รหัสผ่านไม่ตรงกัน")
})

export const registerPetSchema = object({
  name: string().required("กรุณากรอกชื่อสัตว์เลี้ยง"),
  type: string().oneOf(["dog","cat","bird","rabbit","other"],"ประเภทสัตว์ไม่ถูกต้อง").required("กรุณาระบุประเภทสัตว์"),
  blood: string().required("กรุณาระบุกรุ๊ปเลือดของสัตว์"),
  breed: string().required("กรุณาระบุสายพันธ์สัตว์"),
  age: number().min(0,"อายุไม่สามารถติดลบได้").required("กรุณาระบุอายุของสัตว์"),
  gender: string().oneOf(["male","female"],"เพศต้องเป็น male หรือ female เท่านั้น").required("กรุณาระบุเพศของสัตว์เลี้ยง"),
}) 

export const loginSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณาใส่อีเมลล์ให้ถูกต้อง"),
  password: string().min(6,"รหัสต้องมีมากกว่า 6 อักขระ"),
})

export const updateSchema = object({
  name: string().required("กรุณากรอกชื่อ"),
  email: string().email("Email ไม่ถูกต้อง").required("กรุณาใส่อีเมลล์ให้ถูกต้อง"),
  phone: string().required("กรุณากรอกเบอร์โทรศัพท์"),
})

export const postServiceSchema = object({
  name: string().required('กรุณากรอกชื่อบริการ'),
  description: string().required('กรุณากรอกรายละเอียดบริการ'),
})

export const bookingSchema = object({
  date: string().required("กรุณาใส่วันที่ต้องการใช้บริการ"),
  time: string().required("กรุณาใช้เวลาที่ต้องการใช้บริการ"),
  petId: string().required('กรุณาเลือกสัตว์เลี้ยง'),
  serviceId: string().required('กรุณาเลือกบริการ'),
})

export const updatePetSchema = object({
  name: string().required("กรุณากรอกชื่อสัตว์เลี้ยง"),
  type: string().oneOf(["dog","cat","bird","rabbit","other"],"ประเภทสัตว์ไม่ถูกต้อง").required("กรุณาระบุประเภทสัตว์"),
  blood: string().required("กรุณาระบุกรุ๊ปเลือดของสัตว์"),
  breed: string().required("กรุณาระบุสายพันธ์สัตว์"),
  age: number().min(0,"อายุไม่สามารถติดลบได้").required("กรุณาระบุอายุของสัตว์"),
  gender: string().oneOf(["male","female"],"เพศต้องเป็น male หรือ female เท่านั้น").required("กรุณาระบุเพศของสัตว์เลี้ยง"),
})



// ฟังก์ชัน middleware สำหรับตรวจสอบความถูกต้องของข้อมูลที่รับเข้ามาตาม schema ที่กำหนด
export const validate = (schema) => async(req,res,next)=>{
  try{
    // ตรวจสอบข้อมูลใน req.body ตาม schema ที่รับเข้ามา
    await schema.validate(req.body,{abortEarly: false});
    next(); // ถ้าข้อมูลถูกต้อง ไปยัง middleware ถัดไป
  }catch(error){
    // ถ้าข้อมูลไม่ถูกต้อง จะรวมข้อความ error ทั้งหมด
    const errMsg = error.errors.map((item)=> item)
    const errTxt = errMsg.join(",")
    console.log(errMsg,'Errorlog') // แสดง error ใน console
    const mergeErr =  new Error(errTxt);
    next(mergeErr); // ส่ง error ไปยัง error handler
  }
}