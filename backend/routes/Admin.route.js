const express = require("express");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../models/Admin.model");

const adminRouter = express.Router();

/* ------ Get all Admins ------ */
adminRouter.get("/", async (req, res) => {
  try {
    const data = await AdminModel.find();
    res.status(200).send({ admins: data });
  } catch (error) {
    res.status(400).send(error);
  }
});

/* ------ Register Admin  ------ */
adminRouter.post("/register", async (req, res) => {
  //logic
  const { email, password, number, name } = req.body;

  try {
    //hashing password
    bcrypt.hash(password, 5, async (err, hash) => {
      if (hash) {
        const user = new AdminModel({ name, number, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "New Admin has been registered" });
      } else {
        res.status(400).send(err);
      }
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* ------ Exports ------ */
module.exports = { adminRouter };
