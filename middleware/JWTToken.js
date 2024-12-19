const jwt = require("jsonwebtoken");

const JWTToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from 'Authorization: Bearer token'

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  try {
    // Verify the token with the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request object
    next(); // Call next() to proceed to the next middleware/route handler
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = JWTToken;
