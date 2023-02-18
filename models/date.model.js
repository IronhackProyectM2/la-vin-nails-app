const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema({
  service: {
    type: String,
    required: [true, "Seleccione un servicio"],
  },
  type: {
    type: String,
    required: [true, "Seleccione un tipo de servicio"],
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
  designComents: {
    type: String,
  },
  date: {
    type: String,
  },
  hour: {
    type: String,
  },
});

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
