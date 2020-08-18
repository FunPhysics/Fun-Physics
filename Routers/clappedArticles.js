const express = require("express");

const router = express();

const clabbedArtcilesController = require("../Controllers/ClappedArticles");
const { loginRequired, checkIsSameUser } = require("../Controllers/utils");

router.get("/userId/:id", loginRequired, checkIsSameUser, clabbedArtcilesController.listUserClappedArticles);
router.post("/", loginRequired, clabbedArtcilesController.createUserClappedArticle);
router.delete("/articleId/:id", loginRequired, clabbedArtcilesController.deleteUserClappedArticle);

exports.default = router;
