const Redis = require("ioredis");
require("dotenv").config();

const redisClient = process.env.REDIS_URL
	? new Redis({
			host: process.env.REDIS_HOST,
			port: process.env.REDIS_PORT,
			password: process.env.REDIS_PASSWORD,
	  })
	: new Redis();

module.exports = redisClient;
