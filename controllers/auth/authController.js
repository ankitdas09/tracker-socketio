const jwt = require("jsonwebtoken");
const config = require("../../config/defaults");
const signJWT = function (user) {
	const token = jwt.sign(user, config.JWT_SECRET);
	console.log(token);
	return token;
};

const verifyJWT = function (token) {
	try {
		const decoded = jwt.verify(token, config.JWT_SECRET);
		return decoded;
	} catch (error) {
		return false;
	}
};

module.exports = { signJWT, verifyJWT };
