require("dotenv").config();

const corsConfig = {
	origin: process.env.CLIENT_URL || "http://localhost:3000/",
	credentials: true,
};

module.exports = { corsConfig };
