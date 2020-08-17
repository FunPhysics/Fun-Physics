/* eslint-disable camelcase */
const { ClappedArticle } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { article_id } = req.body;
    if (!article_id) throw new Error("missed required params");

    const newClappedArticle = new ClappedArticle({ article_id, user_id: req.session.user.id });
    const result = await newClappedArticle.save();
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
