module.exports.authUser = (socket, next) => {
	const _id = socket.handshake.auth.id;
	const user = { id: _id };
	if (!user.id) {
		return next();
	}
	socket.user = user;
	return next();
};
