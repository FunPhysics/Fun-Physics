const { Article } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const result = await Article.find();
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
