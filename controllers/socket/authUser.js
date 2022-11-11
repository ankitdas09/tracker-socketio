module.exports.authUser = (socket, next) => {
	const user = { name: "Bus2", id: "AS022345" };
	if (!user.id) {
		return next();
	}
	socket.user = user;
	return next();
};
