const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      messagge: "found",
      data: users,
    });
  } catch (e) {
    res.status(404).json({ message: "error" });
  }
  res.status(200).json({ message: "get all users" });
};
exports.saveUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

     const createdUser = await User.create({
    
      fullname:req.body.fullname,
      username:req.body.username,
      password:hashedPassword,
      confirmPassword:hashedPassword,
      phoneNumber:req.body.phoneNumber,
      avatarURl:req.body.avatarURl,
    });
    const token = jwt.sign({ id: createdUser._id, username: createdUser.username,phoneNumber:createdUser.phoneNumber },"HunterxHunter");
    res.status(201).json({ message: "created user",token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }

};

  exports.signin = async (req, res) => {
    try {
      
      const user = await User.findOne({ username: req.body.username });
      if (user === null) {
        return res.status(400).json({ message: "user does not exsist" });
      }
  
      //2. password database same pass
      const compare = await bcrypt.compare(req.body.password, user.password);
      if (compare === false) {
        return res.status(400).json({ message: "Wrong password" });
      }
      user.password = undefined;
      const token = jwt.sign({ id: user._id, username: user.username,phoneNumber:user.phoneNumber },"HunterxHunter");
      res.status(200).json({ message: "logged in" ,user,token });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }

  };
exports.editUser = (req, res) => {
  res.status(200).json({ message: "edit users" });
};
exports.getUser = (req, res) => {
  res.status(200).json({ message: "get one users" });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({ message: "delete users" });
};