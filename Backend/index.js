const express = require("express");
const app = express();
const configDotenv = require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const ProductRouter = require("./routes/product.routes.js");
const port = 3000;
app.use(express.json());
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

//storage

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//create uploading endpoint for images
app.use('/images',express.static(path.join(__dirname, "upload","images")));

app.post("/backend/upload", upload.single("product"), (req, res) => {
  res.json({
    success: true,
    image_url: `http//localhost:${port}/images/${req.file.filename}`,
  });
});



//routes 

app.use('/backend/product',ProductRouter)






app.listen(port, (error) => {
  if (!error) {
    console.log("server is running on port 3000");
  } else {
    console.log(error);
  }
});
