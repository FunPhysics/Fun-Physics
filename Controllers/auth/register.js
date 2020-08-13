/* eslint-disable camelcase */

const { User } = require("../../Models");

exports.default = async function (req, res, next) {
  try {
    const {
      email, password, first_name, last_name,
    } = req.body;

    if (!email || !password || !first_name || !last_name) throw new Error("missed required params");

    const newUser = new User(req.body);
    const data = await newUser.save();
    res.status(200).send({ sucess: true, data: data.rows });
  } catch (e) {
    next(e);
  }
};
