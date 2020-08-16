const express = require("express");

const router = express();

const articlesController = require("../Controllers/articles");
const { loginRequired } = require("../Controllers/utils");

router.get("/", articlesController.listArticles);
router.get("/:id", articlesController.getArticle);
router.post("/", loginRequired, articlesController.createArticle);

exports.default = router;
