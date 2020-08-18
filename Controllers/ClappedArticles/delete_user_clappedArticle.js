/* eslint-disable camelcase */
const { ClappedArticle } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id } = req.params;
    if (!id) throw new Error("missed required params");

    const removedClappedArticle = new ClappedArticle({ article_id: id, user_id: req.session.user.id });
    await removedClappedArticle.remove();
    res.status(200).send({ success: true });
  } catch (e) {
    next(e);
  }
};
