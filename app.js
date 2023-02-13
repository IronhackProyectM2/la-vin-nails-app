const express = require("express");

require("./config/hbs.config");

const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

const routes = require("./config/routes.config");
app.use("/", routes);

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at por ${port}`));
