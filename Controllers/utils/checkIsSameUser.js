exports.default = async function (req, res, next) {
  const { id } = req.params;
  if (req.session && req.session.user && req.session.user.id === parseInt(id, 10)) {
    next();
  } else {
    res.status(403).send({ msg: "forbidden!" });
  }
};
