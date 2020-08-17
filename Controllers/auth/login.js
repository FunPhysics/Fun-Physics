const { User } = require("../../Models");

exports.default = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw new Error("missed required params");

    const userData = await User.login(email, password);
    if (!userData) {
      res.redirect("/login?msg=username or password is incorrent");
    } else {
      req.session.user = userData;
      res.redirect("/");
    }
  } catch (e) {
    res.redirect(`${req.url}?msg=${e.message}`);
  }
};
