const express = require("express");
const hbs = require("hbs");

require("./config/hbs.config");

const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);



const routes = require("./config/routes.config");
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at por ${port}`));
