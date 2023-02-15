const mongoose = require("mongoose");

const schema = new mongoose.Schema(
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
});

module.exports = mongoose.model("User", schema);
