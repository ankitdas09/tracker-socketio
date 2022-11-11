const express = require("express");
const { verifyJWT, signJWT } = require("../auth/authController");
const router = express.Router();

router.post("/login", (req, res) => {
	const { username, password } = req.body;
});
