const express = require("express");

const router = express();

const clabbedArtcilesController = require("../Controllers/ClappedArticles");
const { loginRequired, checkIsSameUser } = require("../Controllers/utils");

router.get("/userId/:id", loginRequired, checkIsSameUser, clabbedArtcilesController.listUserClappedArticles);
router.post("/userId/:id", loginRequired, checkIsSameUser, clabbedArtcilesController.createUserClappedArticle);

exports.default = router;
