//for including mongoose module
const mongoose=require ("mongoose");
//to define schema of the sign-in form
const userSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});

//now we need to create a connection with db

//using mongoose  model
// creating collection-"Register"(collection name)  where schema will be stored
//name of the collection should be singular and uppercase"Register"
const Register=new mongoose.model("Register",userSchema);
//exporting Register
module.exports= Register;