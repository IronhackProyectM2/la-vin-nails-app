const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/la-vin-nails";

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    console.info(`Successfully connected to the database ${MONGODB_URI}`)
  )
  .catch();

process.on("SIGINT", function () {
  mongoose.connection.close(function () {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});
