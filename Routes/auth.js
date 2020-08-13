const express = require("express");

const router = express();

const authContoller = require("../Controllers/auth");

router.get("/", authContoller.login);

exports.default = router;
