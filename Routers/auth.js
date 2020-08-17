const express = require("express");

const router = express();

const authContoller = require("../Controllers/auth");

router.post("/login", authContoller.login);
router.post("/register", authContoller.register);
router.get("/logout", authContoller.logout); // to call it from href

exports.default = router;
