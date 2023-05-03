// imports
const express = require("express");
const { DressModel } = require("../models/Dress.model");

const dressRouter = express.Router();

/*-------- Get all the dresses ------*/
dressRouter.get("/", async (req, res) => {
  try {
    let dresses = await DressModel.find();
    res.status(200).send({ msg: dresses });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

/*------ Get a single dress ------*/
dressRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    let dress = await DressModel.findOne({ _id: id });
    res.status(200).send({ msg: dress });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* ------ Create one Dress ------ */
dressRouter.post("/add", async (req, res) => {
  let { name, img, price, mrp, brand, rating, role } = req.body;
  // res.send(data);
  if (role === "admin") {
    try {
      let dress = new DressModel({ name, img, price, mrp, brand, rating });
      await dress.save();
      res.status(200).send({ msg: "Dress added Successfully" });
    } catch (error) {
      res.status(400).send({ err: error });
    }
  } else {
    res.status(200).send({ msg: "You are not Authorized" });
  }
});

/* ------ Update Dress ------ */
dressRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // if(data.role === "admin")
  try {
    await DressModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ res: "Updated Dress Successfully" });
  } catch (error) {
    res.status(200).send(error);
  }
});

/* ------ Delete Dress ------ */
dressRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await DressModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ res: "Deleted Dress Successfully" });
  } catch (error) {
    res.status(200).send(error);
  }
});

// exports
module.exports = { dressRouter };
