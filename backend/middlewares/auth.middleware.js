const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = (req, res, next) => {
  let token = req.headers.authorization;
  // console.log(req.headers)
  // res.send(token)
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.secretKey, (error, decoded) => {
      if (decoded) {
        //getting author and author id from token and linking it to body
        (req.body.authorID = decoded.data.authorID),
          (req.body.author = decoded.data.author);
        req.body.role = decoded.data.role;
        next();
      } else {
        res.status(400).send({ err: error.message });
      }
    });
  } else {
    res.status(200).send("Please Login to access");
  }
};
module.exports = { auth };
