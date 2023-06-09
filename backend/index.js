const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { dressRouter } = require("./routes/Dress.route");
const { adminRouter } = require("./routes/Admin.route");
const { userRouter } = require("./routes/User.route");
const { login } = require("./middlewares/login.middleware");
const { shoesRouter } = require("./routes/Shoe.route");
const { orderRouter } = require("./routes/Order.route");
require("dotenv").config();

const app = express();

/*-------- Middlewares --------*/
app.use(express.json());
app.use(cors());

app.use("/dress", dressRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/shoes", shoesRouter);
app.use("/order", orderRouter);
/*-------- Home Page --------*/
app.get("/", (req, res) => {
  res.status(200).send({ msg: "Home Page" });
});
//for admin/user login
app.post("/login", login);
/*-------- Protected Routes --------*/

/*-------- Server --------*/
app.listen(process.env.port || 3000, async () => {
  try {
    await connection;
    console.log("Connected with DB");
  } catch (error) {
    console.log(error);
    console.log("Somehting went wrong while connecting with DB");
  }
  console.log(`Server running at port ${process.env.port || 3000} `);
});
