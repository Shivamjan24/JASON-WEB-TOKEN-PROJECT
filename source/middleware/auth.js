const {Unauthorized}=require("../errors")
const jwt=require("jsonwebtoken")
require("dotenv").config()

const auth=(req,res,next)=>{
    let author=req.headers.authorization;
    if(!author || !author.startsWith("Bearer"))
        throw new Unauthorized("not authorized to access this information")
    const token=author.split(" ")[1]
    try
    {
        const decoded=jwt.verify(token,process.env.SECRET)
        const{id,username}=decoded;
        req.user={id,username};
        next()
    }
    catch(error)
    {
        throw new Unauthorized("not authorized to access this information")
    }
}

module.exports=auth;