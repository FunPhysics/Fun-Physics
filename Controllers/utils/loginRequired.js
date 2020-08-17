exports.default = async function (req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).send({ msg: "login required!" });
  }
};
