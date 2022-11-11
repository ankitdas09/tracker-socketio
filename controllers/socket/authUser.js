const config = require("../../config/defaults");

module.exports.authUser = (socket, next) => {
	const _id = socket.handshake.auth.id;
	const token = socket.handshake.auth.token;
	const user = {};
	if (token !== config.TOKEN) {
		user = { id: _id };
	}
	console.log(user);
	if (!user.id) {
		return next();
	}
	socket.user = user;
	return next();
};
