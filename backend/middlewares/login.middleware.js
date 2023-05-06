const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { AdminModel } = require("../models/Admin.model");
const { UserModel } = require("../models/User.model");
require("dotenv").config();
const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //finding user in database with the help of email
    const user = await UserModel.findOne({ email });
    const admin = await AdminModel.findOne({ email });
    if (user) {
      //comparing the hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            //attaching userId of user as author ID and its name to token
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: {
                authorID: user._id,
                author: user.name,
                role: "user",
              },
            },
            process.env.secretKey
          );
          res.status(200).send({
            msg: "Login Successfull",
            token,
            user: user.name,
          });
        } else {
          res.status(200).send({
            err: err,
            msg: "Invalid Credentials",
          });
        }
      });
    } else if (admin) {
      bcrypt.compare(password, admin.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            //attaching userId of user as author ID and its name to token we will then use it after login
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: {
                authorID: admin._id,
                author: admin.name,
                role: "admin",
              },
            },
            process.env.secretKey
          );
          res
            .status(200)
            .send({ msg: "Login Successfull", token, admin: admin.name });
        } else {
          res.status(401).send({
            err: err,
            msg: "Invalid Credentials",
          });
        }
      });
    } else {
      res.status(404).send({ msg: "User Does Not Exist" });
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = { login };
