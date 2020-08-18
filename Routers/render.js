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
  const mostBookRows = await ClappedArticle.findMostClappedBook();
  const recentBooksRows = await Article.findRecentBooks();
  res.status(200).render("pages/home", { user: req.session.user, mostBook: mostBookRows.rows[0], recentBooks: recentBooksRows.rows });
});

router.get("/login", (req, res) => {
  res.status(200).render("pages/login", { user: req.session.user });
});

router.get("/register", (req, res) => {
  res.status(200).render("pages/register", { user: req.session.user });
});
router.get("/Add-Article", (req, res) => {
  res.status(200).render("pages/Add", { user: req.session.user });
});

router.get("/articles", (req, res) => {
  res.status(200).render("pages/articles", { user: req.session.user });
});

router.get("/details/:id", (req, res) => {
  res.status(200).render("pages/details", { user: req.session.user });
});

router.get("/explorespace", (req, res) => {
  res.status(200).render("pages/explore-space", { user: req.session.user });
});
exports.default = router;
