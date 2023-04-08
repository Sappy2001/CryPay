//configure express including express modules
const express = require("express");
// including path modules and
//to use path module-brings path of static file
const path=require("path");
//app got all methods and properties of express
const app=express();
//including db file in it
require("./db/conn");
const Register=require("./models/registers"); 
const {json}=require ("express");
const { Script } = require("vm");



//for hosting the project globally(env.PORT)|| OR LOCALLY(3000)
//env-environmental this gives a random port number to host it globally
const port=process.env.PORT||3000;


//to bring out the file directory
const static_path=path.join(__dirname,"../public");

//for use and handling of json with express 
app.use(express.json());//gives undefined when getting form data

//for getting the form data that is user input
app.use(express.urlencoded({extended:false}));


//to use index.html file that is present in public folder--
app.use(express.static(static_path));

//when HTML form gets posted
app.post("/register", async(req,res)=>{
    try{
        //taking user input of pass and cpass
        const password=req.body.password;
        const cpassword=req.body.confirmPassword;
        //checking if passwords match
        if(password===cpassword){
            const registerUser=new Register({
    //use the Register model and get all user inputs of form.
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                password:password,
                confirmPassword:cpassword

            })
            //now to save it in database
            //it will return promise so using "await"
           const registered=await registerUser.save();
           //"sendFile"-after clicking the submit button sending user to index
           //when  anything is created 201 status is needed
           res.status(201).sendFile(path.join(static_path + '/cryPay.html'));
        }
        else{
            //shows the message in alert box using backticks
            res.send(`<script>alert("password dosent match"); window.location.href = "/";</script>`);
        }

    }
    catch(error){
        res.status(400).send(error);
    }
    })
    
    
// ------------------------------------------//
// to set handlebars(hbs) templete engine 
//to use handlebar index.hbs must be in -*"views"* folder
//**--app.set("view engine","hbs")
//to visit homepage
app.get("/",(req,res)=>{
    // res.render("index") - to render the index.hbs in views fold

    res.send("Sorry HTML was not loaded");
    //res means response
});

app.listen(3000,()=>{
    console.log(`server is running at port no ${port}`)
})