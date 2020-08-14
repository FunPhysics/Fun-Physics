exports.default = async function (req, res, next) {
  try {
    if (req.session) {
      req.session.destroy();
    }
    res.redirect("/");
  } catch (e) {
    next(e);
  }
};
