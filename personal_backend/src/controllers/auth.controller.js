import prisma from "../config/prisma.js";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/createError.js";
import { Role } from "@prisma/client";
import jwt from 'jsonwebtoken';

export const registerUser = async(req,res,next)=>{
  try{
    console.log(req.body);
    const {name,email,password,phone} = req.body;
    //check email in db
    const user = await prisma.user.findUnique({
      where:{
        email:email,
      }
    })

    if(user){
      createError(400,'Email already exist!!!')
    }
    ///Encrypt
    const hashPassword = bcrypt.hashSync(password,10)
    console.log(password)
    //Save to db
    const result = await prisma.user.create({
      data:{
        name:name,
        email:email,
        phone: phone,
        password:hashPassword // Save the hashed password
        
      }
    })
    console.log("result", result);
    res.json({message: `Register ${result.name} Success`})

  }catch(error){
    next(error);
  }
}

export const registerPet = async(req,res,next)=>{
  try{
    console.log(req.body);
    const {id} = req.user
    console.log(id,"idddddd")
    const {name,type,blood,breed,age,gender} = req.body
    const existownerpet = await prisma.user.findFirst({
      where: {id: id}
    })
    if(!existownerpet){
      res.status(404).json({message: "ไม่พบเจ้าของสัตว์เลี้ยง"})
    }

    console.log("prisma working")
    const pet = await prisma.pet.create({
      data:{name:name,
      type:type,
      blood:blood,
      breed:breed,
      age:age,
      gender: gender,
      userId: id
      }
    })

    console.log(pet)
    res.json({message: `Register ${pet.name} Success`})
  }catch(error){
    console.log('error')
    console.log(error)
      next(error);
  }
}


export const login = async(req,res,next)=>{
  try{
    const {email,password} = req.body;
    //Check Email
    const user = await prisma.user.findFirst({
      where:{
        email:email
       
      }
    })
    console.log(user);
    if(!user){
      createError(400,"Email is invalid!!!")
    }
    //Check password
    const checkPassword = bcrypt.compareSync(password,user.password)

    if(!checkPassword){
      createError(400,"Password is invalid!!!")
    }

    //generate token
    const payload = {
      id: user.id,
      role: user.role
    }
    delete user.password;
    
    console.log(user)
    const token = jwt.sign(payload,process.env.SECRET,{expiresIn: "1d"})
    res.json({
      message: `Welcome back ${user.name}`,
      user: user,
      token: token
    })

  }catch(error){
    next(error)
  }
}
