const mongoose  = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
mongoose.connect('mongodb+srv://tomar:tomar@cluster0-zmjju.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('open',()=>console.log("database connect ho gyaa bava"))

const dataSchema=new mongoose.Schema({
    lat:String,
    longi:String,
    image:String,
    story:String,
    own:String,
    access:[String],
    date:String
})

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
        required:true
    },
    passHash:{
        type:String,
        minlength:1,
        required:true
    },
    username:{
        type:String,
        minlength:1,
        required:true,
        unique:true,
    },
    data:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Images"
    }]
})

UserSchema.plugin(uniqueValidator);
const Todo = mongoose.model('users',UserSchema);
const Images=mongoose.model('Images',dataSchema);
module.exports={Todo,Images}
