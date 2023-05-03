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

dressRouter.post("/create", async (req, res) => {
  let data = req.body;
  res.send(data);
    try {
      await DressModel.insertMany(data);
      res.status(200).send({ msg: "Dress added Successfully" });
    } catch (error) {
      res.status(400).send({ err: error });
    }
});

module.exports = { dressRouter };
