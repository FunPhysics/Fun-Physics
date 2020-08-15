/* eslint-disable camelcase */
const { Answer } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id: question_id } = req.params;
    if (!question_id) throw new Error("missed required params(id)");
    const result = await Answer.findByQuestionId(question_id);
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
