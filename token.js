/** @format */

const express = require("express");
const { createToken, stkPush } = require("../controller/token");
const router = express.Router();

router.post("/", createToken, stkPush);

module.exports = router;
