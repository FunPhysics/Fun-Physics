const express = require("express");

const router = express();

const articlesController = require("../Controllers/articles");
const { loginRequired, checkIsSameUser } = require("../Controllers/utils");

router.get("/", articlesController.listArticles);
router.get("/:id", articlesController.getArticle);
router.get("/userId/:id", loginRequired, checkIsSameUser, articlesController.listUserArticles);
router.post("/", loginRequired, articlesController.createArticle);

exports.default = router;
