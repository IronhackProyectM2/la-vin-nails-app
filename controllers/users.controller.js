const User = require("../models/user.model");
const Date = require("../models/date.model");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

module.exports.create = (req, res, next) => {
  res.render("users/new");
};

module.exports.doCreate = (req, res, next) => {
  function renderWithErrors(errors) {
    res.render("users/new", { errors, user: req.body });
  }

  delete req.body.role;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        renderWithErrors({ email: "email already registered" });
      } else {
        return User.create(req.body).then(() => res.redirect("/login"));
      }
    })
    .catch((error) => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors);
      } else {
        next(error);
      }
    });
  // User.create(req.body)
  //   .then(() => {
  //     res.redirect("/login");
  //   })
  //   .catch();
};

module.exports.login = (req, res, next) => {
  res.render("users/login");
};

const sessions = {};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    bcrypt.compare(req.body.password, user.password).then((ok) => {
      if (ok) {
        req.session.userId = user.id;
        res.redirect("/services/list");
      }
    });
  });
};

module.exports.update = (req, res, next) => {
  Date.find()
    .populate("user")
    .populate("service")
    .then((dates) => {
      User.findById(req.params.id).then((user) => {
        res.render("users/edit", { user, dates });
      });
    })
    .catch(next);
};

// module.exports.update = (req, res, next) => {
//   const userId = req.params.id
//   User.findById(req.params.id)
//     .then((user) => {
//       console.log(req.params.id)
//       Date.find(  ).then((dates) => {
//         res.render("users/edit", { user, dates });
//       });
//     })
//     .catch(next);
// };

module.exports.doUpdate = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then((user) => {
      res.redirect("/services/list");
    })
    .catch((err) => {
      // TODO
      next(err);
    });
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.redirect("/");
};

// if (req.session.user) {
//   User.findById(req.params.id)
//     .then((user) => {
//       res.render("users/edit", { user });
//     })
//     .catch(next);

// } else {
//   res.redirect("/login");
// }
