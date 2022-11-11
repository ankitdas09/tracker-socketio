const config = require("../../config/defaults");

module.exports.authUser = (socket, next) => {
	const token = socket.handshake.auth.token;
	if (!token || token !== config.TOKEN) {
		return next();
	}
	const _id = socket.handshake.auth.id;
	const user = { id: _id };
	if (!user.id) {
		return next();
	}
	socket.user = user;
	return next();
};
