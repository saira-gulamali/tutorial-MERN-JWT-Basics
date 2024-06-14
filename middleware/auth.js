const jwt = require("jsonwebtoken");

const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  console.log({ authLogging: req.headers.authorization });
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError(
      "No token provided/Invalid credentials to access this route"
    );
  }

  const token = authHeader.split(" ")[1];
  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route!!!");
  }
};

module.exports = authenticationMiddleware;
