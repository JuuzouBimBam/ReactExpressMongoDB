const { Schema, model } = require("mongoose"); // iš mongoose package paimam schema ir model

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// export the model
const User = model("User", UserSchema);
module.exports = User; //exportinam user is sio failo
