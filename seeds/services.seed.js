const services = [
  {
    name: "Esmalte semipermanente",
    type: [
      "Liso de uno o varios colores",
      "Francesitas",
      "Diseño a mano alzada(por uña)",
      "Pegatinas",
    ],
    image:
      "https://manicuraperfecta.es/1441-home_default/128-esmalte-semipermanente-semilac-pink-marshmallow-7ml.webp",
    description: "Duración 20 días",
    price: 10,
  },
  {
    name: "Uñas acrílicas",
    type: [
      "Con esmalte liso",
      "Con decoración simple",
      "Con decoración especial/Francesitas",
    ],
    image:
      "https://www.maquillalia.com/images/productos/claresa-esmalte-semipermanente-soak-off-marshmallow-09-2-69380.jpeg",
    description: "Duración 20 días",
    price: 25,
  },
  {
    name: "Uñas de gel",
    type: [
      "Con esmalte liso",
      "Con decoración simple",
      "Con decoración especial/Francesitas",
    ],
    image:
      "https://www.maquillalia.com/images/productos/claresa-esmalte-semipermanente-soak-off-marshmallow-10-2-69381.jpeg",
    description: "Duración 20 días",
    price: 25,
  },
];

const mongoose = require("mongoose");
const MONGO_URI = "mongodb://127.0.0.1/la-vin-nails";
const Service = require("../models/service.model");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    Service.create(services).then(() => {
      //mongoose.connection.close();
      mongoose.disconnect();
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
