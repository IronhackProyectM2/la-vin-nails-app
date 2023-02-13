const express = require("express");

const common = require("../controllers/common.controller");

const router = express.Router();

router.get("/", common.home);

module.exports = router;
