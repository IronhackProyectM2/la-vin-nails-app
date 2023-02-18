const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Es necesario un nombre"],
    },
    surname: {
      type: String,
      required: [true, "Es necesario un apellido"],
    },
    phone: {
      type: Number,
      required: [true, "Es necesario número de móvil"],
    },
    email: {
      type: String,
      required: [true, "Es necesario un email"],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Es necesaria una contraseña"],
      minLength: [8, "Largo minimo 8 caracteres"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    bcrypt
      .hash(user.password, 10)
      .then((encryptedPassword) => {
        user.password = encryptedPassword;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
