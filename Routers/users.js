const express = require("express");

const router = express();

const userController = require("../Controllers/users");

const { loginRequired, checkIsSameUser } = require("../Controllers/utils");

router.get("/me", loginRequired, userController.getCurrentUser);
router.get("/:id", loginRequired, checkIsSameUser, userController.getUser);

exports.default = router;
