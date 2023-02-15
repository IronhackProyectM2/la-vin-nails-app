const express = require("express");

const common = require("../controllers/common.controller");
const services = require("../controllers/service.controller");
const users = require("../controllers/users.controller");

const router = express.Router();

router.get("/", common.home);
router.get("/services", services.list);

router.get("/users/login", users.login);
router.get("/users/new", users.create);
router.post("/users", users.doCreate);

module.exports = router;
