const mongoose=require("mongoose")

module.exports= async()=>{
    try {
         await mongoose.connect("mongodb://127.0.0.1/Authintication")
        console.log("connect to db ^_^")
    } catch (error) {
        console.log(error)
    }
}
