const express = require("express");
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
  let data = req.body;
  try {
    let admin = new AdminModel(data);
    await admin.save();
    res.status(200).send({ res: "Admin Added" });
  } catch (error) {
    res.status(400).send(error);
  }
});

/* ------ Exports ------ */
module.exports = { adminRouter };