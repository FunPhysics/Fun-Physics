const { Question } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const result = await Question.find();
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
