const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "Seleccione un servicio"],
    },
    type: {
      type: String,
      required: [true, "Seleccione un tipo de servicio"],
    },
    handState: {
      type: String,
      // required: [true, "Necesitamos una foto para conocer tus manos"],
    },
    desiredDesign: {
      type: String,
    },
    designDetails: {
      type: String,
      required: [true, "Son necesarios los detalles"],
      maxLength: [300, "max 300 chars."],
    },
    date: {
      type: String,
      required: [true, "Es necesario seleccionar un día"],
    },
    turn: {
      type: String,
      required: [true, "Es necesario seleccionar una hora"],
    },
    price: {
      type: Number,
    },
    dateState: {
      type: String,
      enum: ["Pendiente", "Confirmada", "Rechazada"],
      default: "Pendiente",
    },
  },
  { timestamps: true }
);

dateSchema.index({ date: 1, turn: 1 }, { unique: true });

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
