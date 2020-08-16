const { Article } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { title, description } = req.body;

    if (!title || !description) throw new Error("missed required params");

    const newArticle = new Article({ title, description, author_id: req.session.user.id });
    await newArticle.save();
    res.status(201).send({ success: true });
  } catch (e) {
    next(e);
  }
};
