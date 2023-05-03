const jwt = require("jsonwebtoken");
const { AdminModel } = require("../models/Admin.model");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    let user = await UserModel.find({ username, password });
    let admin = await AdminModel.find({ username, password });

    // console.log(user)
    if (user.length > 0) {
      jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: username },
        process.env.secretKey,
        (err, token) => {
          if (token) {
            res
              .status(200)
              .send({ message: "Login Successfull", user, token: token });
          } else {
            res.status(401).send({ error: "Inavlid Credentials!!!", err: err });
          }
        }
      );
    } else if (admin.length > 0) {
      jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 60 * 60, data: username },
        process.env.secretKey,
        (err, token) => {
          if (token) {
            res
              .status(200)
              .send({ message: "Login Successfull", admin, token: token });
          } else {
            res.status(401).send({ error: "Inavlid Credentials!!!", err: err });
          }
        }
      );
    } else {
      res.status(401).send({ error: "Inavlid Credentials!!!" });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
module.exports = { login };
