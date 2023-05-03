const express = require("express");
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

/* ------ Get all User ------ */
userRouter.get("/", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).send({ users: data });
  } catch (error) {
    res.status(400).send(error);
  }
});
// /* ------ Get one  User ------ */
// userRouter.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     let user = await UserModel.find({ _id: id });
//     res.status(200).send({ user: user[0] });
//   } catch (error) {}
// });

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
