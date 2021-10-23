const express = require("express");

const Router = express.Router();
const userController = require("../controllers/auth");
//post
Router.route("/").get(userController.getUsers).post(userController.saveUser);
Router.route("/signin").post(userController.signin);
// get delete put
Router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.editUser)
  .delete(userController.deleteUser);

module.exports = Router;