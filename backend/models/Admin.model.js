const mongoose = require("mongoose");

/* ------ Schema ------ */
const adminSchema = mongoose.Schema(
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
const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };
