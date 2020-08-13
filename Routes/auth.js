const express = require("express");

const router = express();

const authContoller = require("../Controllers/auth");

router.get("/", (req, res) => {
  if (req.session && req.session.user) {
    res.status(200).send({ sucess: true, data: req.session.user });
  } else {
    res.status(401).send({ sucess: false, msg: "auth required!" });
  }
});
router.post("/login", authContoller.login);
router.post("/register", authContoller.register);
router.delete("/logout", authContoller.logout);

exports.default = router;
