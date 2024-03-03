const express = require("express");
const app = express();
const configDotenv = require("dotenv").config();
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const cors = require("cors");
const ProductRouter = require("./routes/product.routes.js");
const UserRouter = require("./routes/user.routes.js")
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res, next) => {
  res.status(200).json("i am working");
});






//routes 

app.use('/backend/product',ProductRouter)
app.use('/backend/user',UserRouter)





app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port 3000");
  } else {
    console.log(error);
  }
});
