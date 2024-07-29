const jwt=require('jsonwebtoken');
const { BadRequest } = require('../errors');
require("dotenv").config()

const postdata= async (req,res)=>{
    const {username,password}=req.body;
    if(!username || !password)
        throw new BadRequest("please provide full information")
    const id=new Date().getDate();
    const token=jwt.sign({id,username},process.env.SECRET,{
        expiresIn:"30d"
    })
    res.status(201).json({msg:"new user created",token})
}


const getdata = async (req,res)=>{
    const lucky=Math.floor(Math.random()*100);
    const {id,username}=req.user

    res.status(200).json({msg:`hello ${username}`,secret:`this is your authorized lucky number:${lucky}`})
}

module.exports = {postdata,getdata};