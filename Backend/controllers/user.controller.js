const bcryptjs = require("bcryptjs");
const User = require("../models/user.models");
const jwt = require("jsonwebtoken");

async function signup(req, res, next) {
  const { email, password, name, cart } = req.body;
  if (email === "" || password === "" || name === "") {
    return res.status(400).json({ message: "all feild required" });
  }
  const hassedPassword = bcryptjs.hashSync(password, 9);

  const newUser = new User({
    name,
    email,
    password: hassedPassword,
    cart,
  });

  try {
    await newUser.save();
    res
      .status(200)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    next(error);
  }
}

async function signin(req, res, next) {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    if (!validUser) {
      res.status(401).res.json({ message: "User not found" });
      return;
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      res.status(401).res.json({ message: "Wrong Credintials" });
      return;
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SEC);
    const { password: pass, ...rest } = await validUser._doc;

    res
      .cookie("shopper_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
}

async function UpdateUser(req, res, next) {
  try {
    if (req.user.id !== req.body.id) {
      res.status(402).json({ message: "cannot be add" });
      return;
    }
    const updateUser = await User.findByIdAndUpdate(
      req.body.id,
      {
        $set: {
          cart: req.body.cart,
        },
      },
      { new: true }
    );

    const { password: pass, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
}

function logOut(req,res,next){
  res.clearCookie('shopper_token');
  res.status(200).json({message:"logout success"})
  next();
}
module.exports = { signup, signin, UpdateUser,logOut };
