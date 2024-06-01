const express=require("express")

const connect=require("./connectToDB")

connect()
const app=express()


// Routes
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/users", require("./routes/usersRoute"));



app.listen(3000,()=>{console.log("server is running on port 3000 :)")})