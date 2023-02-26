const Date = require("../models/date.model");
const Service = require("../models/service.model");
const mongoose = require("mongoose");

module.exports.create = (req, res, next) => {
  Service.findById(req.params.id)
    .then((service) => {
      Date.find().then((dates) => {
        res.render("dates/new", { service, dates: JSON.stringify(dates) });
      });
    })
    .catch(next);
};

module.exports.doCreate = (req, res, next) => {
  if (req.files) {
    req.body.handState = req.files["handState"][0].path;
    req.body.desiredDesign = req.files["desiredDesign"][0].path;
  }
  req.body.user = req.user.id;
  req.body.service = req.params.id;
  Date.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Date.find()
    .populate("user")
    .populate("service")
    .sort({ createdAt: req.query.sort || "desc" })
    .then((dates) => {
      res.render("dates/list", { dates });
    })
    .catch(next);
};

module.exports.listPending = (req, res, next) => {
  Date.find({ dateState: "Pendiente" })
    .populate("user")
    .populate("service")
    .sort({ createdAt: req.query.sort || "desc" })
    .then((dates) => {
      res.render("dates/list", { dates });
    })
    .catch(next);
};

module.exports.listConfirmed = (req, res, next) => {
  Date.find({ dateState: "Confirmada" })
    .populate("user")
    .populate("service")
    .sort({ createdAt: req.query.sort || "desc" })
    .then((dates) => {
      res.render("dates/list", { dates });
    })
    .catch(next);
};

module.exports.confirmation = (req, res, next) => {
  req.body.dateState = "Confirmada";
  Date.findByIdAndUpdate(req.params.id, req.body)
    .then((date) => {
      res.redirect("/dates/list/pending");
    })
    .catch();
};

// req.body.service, req.body.designComments
