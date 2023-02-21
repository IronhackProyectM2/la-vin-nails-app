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
  if (req.file) {
    req.body.handState = req.file.path;
  }
  req.body.user = req.user.id;
  Date.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Date.find()
    .then((dates) => {
      res.render("dates/list", { dates });
    })
    .catch(next);
};

// req.body.service, req.body.designComments
