const { Article } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id } = req.params;
    if (!id) throw new Error("missed required params(id)");
    const result = await Article.findById(id);
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
