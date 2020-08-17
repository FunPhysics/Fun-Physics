/* eslint-disable camelcase */

const { User } = require("../../Models");

exports.default = async function (req, res) {
  try {
    const {
      email, password, first_name, last_name,
    } = req.body;

    if (!email || !password || !first_name || !last_name) throw new Error("missed required params");

    await User.register(email, password, first_name, last_name);

    const userData = await User.login(email, password);
    req.session.user = userData;
    res.redirect("/");
  } catch (e) {
    res.redirect(`${req.url}?msg=${e.message}`);
  }
};
