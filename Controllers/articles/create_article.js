/* eslint-disable camelcase */
const { Article } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { title, description, img_url } = req.body;

    if (!title || !description || !img_url) throw new Error("missed required params");

    const newArticle = new Article({
      title, description, img_url, author_id: req.session.user.id,
    });
    await newArticle.save();
    res.status(201).redirect("/Articles");
  } catch (e) {
    next(e);
  }
};
