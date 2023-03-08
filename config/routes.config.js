const express = require("express");

const common = require("../controllers/common.controller");
const services = require("../controllers/services.controller");
const users = require("../controllers/users.controller");
const dates = require("../controllers/dates.controller");
const multer = require("../config/multer.config");
const secure = require("../middlewares/secure.mid");

const router = express.Router();

//FOR Common controller:
router.get("/", common.home);
router.get("/contact", common.contact);

//For user controller:
//Login:
router.get("/login", users.login);
router.post("/login", users.doLogin);

//Register:
router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/users/:id/update", users.update);
router.get("/logout", users.logout);

//FOR Service controller:
router.get("/services/list", services.list);

//For Date controller:
router.get(
  "/services/:id/schedule",
  secure.isAuthenticated,
  dates.create,
  services.list
);
router.post(
  "/dates/:id/new",
  multer.fields([
    { name: "handState", maxCount: 1 },
    { name: "desiredDesign", maxCount: 1 },
  ]),
  dates.doCreate
);
router.get("/dates/list", secure.checkRole("admin"), dates.list);
router.get(
  "/users/:id/dates/list/user",
  secure.isAuthenticated,
  dates.listUser
);
router.get("/dates/list/pending", secure.checkRole("admin"), dates.listPending);
router.get(
  "/dates/list/confirmed",
  secure.checkRole("admin"),
  dates.listConfirmed
);
router.get(
  "/dates/list/confirmedPlanning",
  secure.checkRole("admin"),
  dates.listPlanning
);
router.get(
  "/dates/:id/confirmation",
  secure.checkRole("admin"),
  dates.confirmation
);
router.get("/dates/:id/update", secure.checkRole("admin"), dates.update);
router.post("/dates/:id", secure.checkRole("admin"), dates.doUpdate);
router.get("/dates/:id/delet", secure.isAuthenticated, dates.delete );
router.get("/dates/:id/deletGuest", secure.isAuthenticated, dates.deleteGuest );

module.exports = router;
