const { Question } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id } = req.params;
    const result = await Question.findById(id);
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
