const express = require("express");

const common = require("../controllers/common.controller");
const services = require("../controllers/service.controller");
const users = require("../controllers/users.controller");

const router = express.Router();

router.get("/", common.home);
router.get("/services/list", services.list);

router.get("/login", users.login);
router.post("/login", users.doLogin);

router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/users/:id/update", users.update);


module.exports = router;
