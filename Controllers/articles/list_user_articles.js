const { Article } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id } = req.params;
    const result = await Article.findByAuthorId(id);
    res.status(200).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
