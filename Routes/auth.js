const express = require("express");

const router = express();

const authContoller = require("../Controllers/auth");

router.post("/login", authContoller.login);
router.post("/logout", authContoller.login);
router.post("/register", authContoller.register);

exports.default = router;
