const express=require("express");
const mongoose=require("mongoose");
const router = require("./routes/book_routes")
const dotenv=require("dotenv");
const path=require("path");
const app=express();
const cors=require("cors");
dotenv.config()
mongoose.connect(process.env.MONGO)
.then(()=>console.log("connection successfull"))
.then(()=>{
     app.listen(process.env.PORT||5000);
}).catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());
app.use('/books',router);
app.use(express.static(path.join(__dirname, './client/build')));

app.get('*',function(req,res){
     res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

