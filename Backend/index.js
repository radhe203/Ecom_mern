const express = require("express");
const app = express();
const configDotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const path = require("path")
const cors = require("cors");
const ProductRouter = require("./routes/product.routes.js");
const UserRouter = require("./routes/user.routes.js")
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const __dirname = path.resolve()
//monodeb
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });







//routes 

app.use('/backend/product',ProductRouter)
app.use('/backend/user',UserRouter)

//deployment
app.use(express.static(path.join(__dirname,'Frontend/dist')))

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'Frontend','dist','index.html'))
})

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error hello'
  return res.status(statusCode).json({
      sucess:false,
      statusCode,
      message,

  })
})

//server
app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port 3000");
  } else {
    console.log(error);
  }
});
