const mongoose = require("mongoose");

/* ------ Schema ------ */
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

/* ------ Model ------ */
const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
