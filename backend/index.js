const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();

const app = express();

/*-------- Middlewares --------*/
app.use(express.json());
app.use(cors());

/*-------- Home Page --------*/
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Home Page" });
});

/*-------- Server --------*/
app.listen(process.env.port || 3000, async () => {
  //   try {
  //     await connection;
  //     console.log("Connected with DB");
  //   } catch (error) {
  //     console.log(error);
  //     console.log("Somehting went wrong while connecting with DB");
  //   }
  console.log(`Server running at port ${process.env.port || 3000} `);
});
