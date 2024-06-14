const jwt = require("jsonwebtoken");

const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;
  // console.log(username, password);

  //  mongo - to be covered in future projects

  //  Joi - to be covered in future projects

  //  check in controller
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }

  //   const token = jwt.sign(payload, secret, options);

  // only for demo, as we dont have a DB
  const id = new Date().getDate();
  //   keep payload small, for users with bad internet connection
  // in production, jwt secret is a long unguessable string
  // secret is used to sign tokens, if someone gets it they can sign tokens on your behalf
  // so its important that its only kept on the server and is long, complex & unguessable

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  // console.log(req.headers);
  console.log(req.user);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data. Your userId is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
