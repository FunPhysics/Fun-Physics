const { Question } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { content } = req.body;

    if (!content) throw new Error("missed required params");

    const newQuestion = new Question({ content, user_id: req.session.user.id });
    const result = await newQuestion.save();
    res.status(201).send({ success: true, data: result.rows });
  } catch (e) {
    next(e);
  }
};
