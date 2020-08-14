const { User } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("missed required params");

    const userData = await User.login(email, password);
    req.session.user = userData;
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};
