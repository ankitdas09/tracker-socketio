const redisClient = require("../../redis");

module.exports.initialiseBus = async (socket) => {
	await redisClient.hset(
		`busId:${socket.user.id}`,
		"busId",
		socket.user.id,
		"connected",
		true
	);
	console.log(await redisClient.hgetall(`busId:${socket.user.id}`));
	socket.join(socket.user.id);
	console.log("Joined ", socket.user.id);
};
