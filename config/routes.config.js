const express = require("express");

const common = require("../controllers/common.controller");
const services = require("../controllers/services.controller");
const users = require("../controllers/users.controller");
const dates = require("../controllers/dates.controller");
const multer = require("../config/multer.config");


const router = express.Router();

//FOR Common controller:
router.get("/", common.home);

//For user controller:
//Login:
router.get("/login", users.login);
router.post("/login", users.doLogin);

//Register:
router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/users/:id/update", users.update);

//FOR Service controller:
router.get("/services/list", services.list);
router.get("/services/detail", services.detail);

//For Date controller:

router.get("/dates/new", dates.create, services.list);
router.post("/dates", multer.single('handState'), /*multer.single('desiredDesign'), */ dates.doCreate);
router.get("/dates/list", dates.list);

module.exports = router;
