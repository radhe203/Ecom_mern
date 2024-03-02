const monggose = require("mongoose")

const userModel = new monggose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    cart:{
        type:Array,
        required:true,
    }
    ,password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = monggose.model('user',userModel)

module.exports = User