const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    service: {
      type: String,
      required: [true, "Seleccione un servicio"],
    },
    tipo: {
      type: String,
      //required: [true, "Seleccione un tipo de servicio"],
    },
    handState: {
      type: String,
      required: [true, "Necesitamos una foto para conocer tus manos"],
    },
    desiredDesign: {
      type: String,
    },
    designDetails: {
      type: String,
      required: [true, "Son necesarios los detalles"],
      maxLength: [300, "max 300 chars."]
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
    price: {
      type: Number,
    },
    dateState: {
      type: String,
      enum: ["Sin confirmar", "Confirmada"],
      default: "Sin confirmar"
    }
  },
 { timestamps: true }
);

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
