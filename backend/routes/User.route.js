const express = require("express");
const { UserModel } = require("../models/User.model");

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
  const { email, pass, age, name } = req.body;

  try {
    //hashing password
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (hash) {
        const user = new UserModel({ name, age, email, pass: hash });
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

userRouter.post("/login", async (req, res) => {
  //logic
  const { email, pass } = req.body;
  try {
    //finding user in database with the help of email
    const user = await UserModel.findOne({ email });
    if (user) {
      //comparing the hashed password
      bcrypt.compare(pass, user.pass, (err, result) => {
        if (result) {
          const token = jwt.sign(
            //attaching userId of user as author ID and its name to token we will then use it after login
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: {
                authorID: user._id,
                author: user.name,
              },
            },
            process.env.secretKey
          );
          res
            .status(200)
            .send({ msg: "Login Successfull", token, user: user.name });
        } else {
          res.status(200).send({
            err: err,
            msg: "Invalid Credentials",
          });
        }
      });
    } else {
      res.status(200).send({ msg: "User Does Not Exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* ------ Exports ------ */
module.exports = { userRouter };
