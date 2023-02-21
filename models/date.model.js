const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: [true, "Seleccione un servicio"],
    },
    tipo: {
      type: String,
      //required: [true, "Seleccione un tipo de servicio"],
    },
    leftHandState: {
      type: String,
    },
    rigthHandState: {
      type: String,
    },
    desiredDesign: {
      type: String,
    },
    designDetails: {
      type: String,
      required: [true, "Son necesarios los detalles"],
      maxLength: [200, "max 200 chars."]
    },
    requestedDate: {
      type: String,
      maxLength: [200, "max 200 chars."]
    },
    date: {
      type: String,
    },
    hour: {
      type: String,
    },
  },
 { timestamps: true }
);

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
