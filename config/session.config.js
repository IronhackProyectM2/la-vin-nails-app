const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("../models/user.model");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1/la-vin-nails";

module.exports.session = session({
  secret: process.env.SESSION_SECRET || "lavin secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.SESSION_SECRET === "true",
  },
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    ttl: 14 * 24 * 60 * 60,
  }),
});

module.exports.loadSessionUser = (req, res, next) => {
  const { userId } = req.session;
  if (userId) {
    User.findById(userId)
      .then((user) => {
        req.user = user;
        res.locals.currentUser = user;
        res.locals.logedUser = user;
        next();
      })
      .catch();
  } else {
    next();
  }
};
