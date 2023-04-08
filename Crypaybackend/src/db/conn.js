//require -helps to use extrnal modules 
const mongoose=require("mongoose");
//method for connecting

//mongodb://localhost:27017/NameOfDatabase
mongoose.connect("mongodb://localhost:27017/youtubeRegistration",{
//useNewUrlParser & useUnifiedTopology so that deprecation warning dosent come
    useNewUrlParser:true,
    useUnifiedTopology:true,

    // when connected to db it returns promise,in future it gives data so we use then()
}).then(()=>{
    console.log(`connection Sucessful`);//promise fulfilled
}).catch((e)=>{
    console.log(`no connection`);//promise rejected
})