const express = require("express");
const http = require("http");
const config = require("./config/defaults");
const cors = require("cors");
const { corsConfig } = require("./corsConfig");

const { Server } = require("socket.io");
const app = express();
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
	cors: corsConfig,
});
const redisClient = require("./redis");
const { authUser } = require("./controllers/socket/authUser");
const { initialiseBus } = require("./controllers/socket/initialiseBus");
const { disconnectBus } = require("./controllers/socket/disconnectBus");

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/flush", async (req, res) => {
	await redisClient.flushall();
	res.send("ok");
});

io.use(authUser);

io.on("connect", (socket) => {
	if (socket.user) {
		initialiseBus(socket);
	}

	socket.on("join", async (busId) => {
		socket.join(busId);
	});

	socket.on("location", (location, busId) => {
		if (!socket.user) return;
		io.to(busId).emit("location", location);
	});

	socket.on("disconnect", () => {
		if (socket.user) {
			disconnectBus(socket);
		}
		console.log("Disconnected");
	});
});

server.listen(config.PORT, (req, res) => {
	console.log("Listening on port", config.PORT);
});
