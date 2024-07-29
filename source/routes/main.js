const express=require('express');
const router=express.Router();
const auth=require("../middleware/auth")

const {postdata,getdata}=require("../controllers/main")

router.route("/login").post(postdata);
router.route("/dashboard").get(auth,getdata);

module.exports=router