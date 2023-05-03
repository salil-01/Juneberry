const mongoose = require("mongoose");

/* ------ Schema ------ */
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: Number, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

/* ------ Model ------ */
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
