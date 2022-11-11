const redisClient = require("../../redis");

module.exports.disconnectBus = async (socket) => {
	await redisClient.hset(`busId:${socket.user.id}`, "connected", false);
	console.log(await redisClient.hgetall(`busId:${socket.user.id}`));
};
