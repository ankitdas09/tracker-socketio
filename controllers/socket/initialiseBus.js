const redisClient = require("../../redis");
const { signJWT } = require("../auth/authController");
module.exports.initialiseBus = async (socket) => {
	await redisClient.hset(
		`busId:${socket.user.id}`,
		"busId",
		socket.user.id,
		"connected",
		true
	);
	// console.log(signJWT(socket.user));
	console.log(await redisClient.hgetall(`busId:${socket.user.id}`));
	socket.join(socket.user.id);
	console.log("Joined ", socket.user.id);
};
