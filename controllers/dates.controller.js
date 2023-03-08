const Date = require("../models/date.model");
const Service = require("../models/service.model");
const mongoose = require("mongoose");
const User = require("../models/user.model");

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
  function renderWithErrors(errors) {
    res.redirect("services/list", { errors, date: req.body });
  }

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
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
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
    .sort({ createdAt: req.query.sort || "asc" })
    .then((dates) => {
      res.render("dates/list", { dates });
    })
    .catch(next);
};
//deberíamos filtrar por fecha y por turno

module.exports.confirmation = (req, res, next) => {
  req.body.dateState = "Confirmada";
  Date.findByIdAndUpdate(req.params.id, req.body)
    .then((date) => {
      res.redirect("/dates/list/pending");
    })
    .catch();
};

module.exports.update = (req, res, next) => {
  Service.find()
    .then((services) => {
      Date.findById(req.params.id)
        .populate("user")
        .populate("service")
        .then((date) => {
          Date.find().then((dates) => {
            res.render("dates/edit", {
              services,
              date,
              dates: JSON.stringify(dates),
            });
          });
        });
    })
    .catch(next);
};

module.exports.listPlanning = (req, res, next) => {
  const selectDate = req.query.fecha;
  const turns = [1, 2, 3, 4, 5, 6, 7, 8];

  Date.find({ dateState: "Confirmada", date: selectDate })
    .populate("user")
    .populate("service")
    .sort({ turn: req.query.sort || "asc" })
    .then((dates) => {
      res.render("dates/planning", { dates, turns });
    })
    .catch(next);
};

module.exports.doUpdate = (req, res, next) => {
  Date.findByIdAndUpdate(req.params.id, req.body)
    .then((date) => {
      res.redirect("/dates/list/pending");
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Date.findById(req.params.id)
    .then((date) => {
      if (!date) {
        res.redirect("/dates/list/pending");
      } else {
        date
          .delete()
          .then(() => res.redirect("/dates/list/pending"))
          .catch(next);
      }
    })
    .catch(next);
};

module.exports.listUser = (req, res, next) => {
  req.body.user = req.user.id;
  Date.findById(user)
    .populate("user")
    .then((date) => res.render("dates/detail", { date, user }))

    .catch(next);
};
