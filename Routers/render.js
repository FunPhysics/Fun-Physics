const express = require("express");

const router = express();

const { ClappedArticle, Article } = require("../Models");

// test route
router.get("/user", (req, res) => {
  if (req.session && req.session.user) {
    res.status(200).send({ sucess: true, data: req.session.user });
  } else {
    res.status(401).send({ sucess: false, msg: "auth required!" });
  }
});

router.get("/", async (req, res) => {
  const mostArticleRows = await ClappedArticle.findMostClappedArticle();
  const recentArticleRows = await Article.findRecentArticles();
  res.status(200).render("pages/home", { user: req.session.user, mostArticle: mostArticleRows.rows[0], recentArticles: recentArticleRows.rows });
});

router.get("/Login", (req, res) => {
  res.status(200).render("pages/login", { user: req.session.user });
});

router.get("/Register", (req, res) => {
  res.status(200).render("pages/register", { user: req.session.user });
});
router.get("/Add-Article", (req, res) => {
  res.status(200).render("pages/Add", { user: req.session.user });
});
router.get("/Articles", async (req, res) => {
  const articles = await Article.find();
  res.status(200).render("pages/articles", { user: req.session.user, articles: articles.rows });
});

router.get("/Details/:id", async (req, res) => {
  const { id } = req.params;
  if (!id) res.status(400).send({ msg: "missed required params(id)" });
  else {
    const userId = req.session && req.session.user ? req.session.user.id : null;
    const article = await Article.findById(id, userId);
    if (!article || !article.rows) {
      res.status(404).send({ msg: "article not found" });
    } else {
      res.status(200).render("pages/details", { user: req.session.user, article: article.rows[0] });
    }
  }
});

router.get("/Explorespace", (req, res) => {
  res.status(200).render("pages/explore-space", { user: req.session.user });
});

exports.default = router;
