const express = require("express");
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const { auth } = require("../middlewares/auth.middleware");
const userRouter = express.Router();

/* ------ Get all User ------ */
//only admin can access
userRouter.get("/", auth, async (req, res) => {
  let data = req.body;
  if (data.role === "admin") {
    try {
      const data = await UserModel.find();
      res.status(200).send({ users: data });
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(200).send({ msg: "You are not Authorized" });
  }
});
// /* ------ Get one  User ------ */

userRouter.get("/:id", auth, async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const user = await UserModel.findOne({ _id: id });
  if (data.role === "admin" || data.authorID == user._id) {
    res.status(200).send({ user: user });
  } else {
    res.status(200).send({ msg: "You are not Authorized" });
  }
});

/* ------ Register User ------ */
userRouter.post("/register", async (req, res) => {
  //logic
  const { email, password, number, name } = req.body;

  try {
    //hashing password
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const user = new UserModel({ name, number, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "New User has been registered" });
      } else {
        res.status(400).send(err);
      }
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* ------ Exports ------ */
module.exports = { userRouter };
