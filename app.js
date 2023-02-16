const express = require("express");
const logger = require("morgan");

require("./config/db.config");

require("./config/hbs.config");

const { session, loadSessionUser } = require("./config/session.config")

const path = require("path");

const app = express();

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.urlencoded());
app.use(logger("dev"));

app.use(session);
app.use(loadSessionUser);


const routes = require("./config/routes.config");
app.use("/", routes);

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at por ${port}`));
