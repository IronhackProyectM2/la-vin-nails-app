const Date = require("../models/date.model");
const Service = require("../models/service.model");

const mongoose = require("mongoose");

module.exports.create = (req, res, next) => {
  Service.find()
    .then((services) => {
      res.render("dates/new", { services });
    })
    .catch(next);
};

module.exports.doCreate = (req, res, next) => {
  Date.create(req.body.service, req.body.designComments)
    .then(() => {
      res.redirect("/");
    })
    .catch();
};
