const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const authrouter=require('./routes/auth/authentication')
const getdata=require('./routes/access/api')
const validatetoken=require('./routes/auth/authmiddleware')
const logger=require("./logger/log")
const config=require('./config')
const app=express()
app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use("/main",express.static('public'));
app.use(express.static('build'));

app.use(cors())

// app.use(logger)

app.use('/auth',authrouter)
app.use(validatetoken)
app.use('/api',getdata)

app.listen(config.port,()=>console.log("Chall gyya bava"))

