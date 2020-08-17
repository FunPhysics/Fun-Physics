/* eslint-disable camelcase */
const { Answer } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { id: question_id } = req.params;
    const { content } = req.body;

    if (!content || !question_id) throw new Error("missed required params");

    const newQuestion = new Answer({ content, question_id, user_id: req.session.user.id });
    const result = await newQuestion.save();
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
