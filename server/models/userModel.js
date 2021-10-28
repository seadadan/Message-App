const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  avatarURl: { type: String, required: true },
});
const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
