const router=require('express').Router()
const User=require('../connection').Todo
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const config=require('../../config')


router.post("/register",async (req,res,next)=>{
    try{
        console.log("Chalo use banaye")
        const data=req.body
        const passhash=await bcrypt.hash(data.pass,8)
        console.log("Hash ho gyaa",passhash)
        if(data.user.length<1 || data.pass.length<1 || data.name.length<1){
            res.status(401).send("Either username or pass or name not provided")
        }
        else{
        const newus=new User({
              name:data.name,
              passHash:passhash,
              username:data.user
            })
        newus.save((e)=>{
            if(e){
                res.status(401).send("Registration Failed")
            }
            else{
                res.status(200).send("Registration Successfull")
            }
        })
        
    }
    }
    catch(e){
        next(e)
    }
})

router.post('/login',async(req,res,next)=>{
    try{
        const data=req.body
        console.log("Login Data",data)
        const user=await User.findOne({username:data.user})
        console.log("USer Found",user)
        let comp='';
        if(user){
            comp=await bcrypt.compare(data.pass,user.passHash)
            if(!comp){
                res.status(401).send("Wrong PAssword")
                return
            }
        }
        else{
            res.status(401).send("User not found")
            return
        }
        console.log("Making a jwt Token")
        const userForToken={
            username:user.username,
            id:user._id
        }
        const token = jwt.sign(userForToken, config.secret)
        console.log("JWT Token made")
        res.status(200).send({
            token,
            username:user.username,
            name:user.name
        })
    }
    catch(e){
        next(e)
    }
})

module.exports=router