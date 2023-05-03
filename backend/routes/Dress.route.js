const express = require("express");
const { DressModel } = require("../models/Dress.model");

const dressRouter = express.Router();

dressRouter.get("/", async (req, res) => {
  try {
    let dresses = await DressModel.find();
    res.status(200).send({ msg: dresses });
  } catch (error) {
    res.status(400).send({ err: error });
  }
});

dressRouter.post("/create", async (req, res) => {
  let data = req.body;
  res.send(data);
//   try {
//     await DressModel.insertMany([data]);
//     res.status(200).send({ msg: "Dress added Successfully" });
//   } catch (error) {
//     res.status(400).send({ err: error });
//   }
});

module.exports = { dressRouter };
