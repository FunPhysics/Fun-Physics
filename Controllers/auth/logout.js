exports.default = async function (req, res, next) {
  try {
    if (req.session) {
      req.session.destroy();
    }

    res.status(200).send({ sucess: true });
  } catch (e) {
    next(e);
  }
};
