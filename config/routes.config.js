const express = require("express");

const common = require("../controllers/common.controller");
const services = require("../controllers/service.controller");
const user = require("../controllers/users.controller")

const router = express.Router();

router.get("/", common.home);
router.get("/services", services.list);

router.get("/users/login", user.login);
router.get("/users/new", user.create)

module.exports = router;
