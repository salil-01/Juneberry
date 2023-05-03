// imports
const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const { DressModel } = require("../models/Dress.model");

const dressRouter = express.Router();

/*-------- Get all the dresses ------*/
dressRouter.get("/", async (req, res) => {

  //handling pagination filters and sorting in a single query
  let { brand, sort, page } = req.query;
  const limit = 9;
  let obj = {};
  brand ? (obj.brand = brand) : null;
  if (page) {
    let skip = +page * limit - limit;
    if (sort) {
      try {
        const dress = await DressModel.find(obj)
          .skip(skip)
          .limit(9)
          .sort(sort === "asc" ? { price: 1 } : { price: -1 });
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const dress = await DressModel.find(obj).skip(skip).limit(9);
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    }
  } else {
    if (sort) {
      try {
        const dress = await DressModel.find(obj).sort(
          sort === "asc" ? { price: 1 } : { price: -1 }
        );
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const dress = await DressModel.find(obj);
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    }
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
dressRouter.post("/add", auth, async (req, res) => {
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
dressRouter.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (data.role === "admin") {
    try {
      await DressModel.findByIdAndUpdate({ _id: id }, data);
      res.status(200).send({ res: "Updated Dress Successfully" });
    } catch (error) {
      res.status(200).send(error);
    }
  } else {
    res.status(200).send({ msg: "You are not Authorized" });
  }
});

/* ------ Delete Dress ------ */
dressRouter.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  let data = req.body;
  if (data.role === "admin") {
    try {
      await DressModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ res: "Deleted Dress Successfully" });
    } catch (error) {
      res.status(200).send(error);
    }
  } else {
    res.status(200).send({ msg: "You are not Authorized" });
  }
});

// exports
module.exports = { dressRouter };
