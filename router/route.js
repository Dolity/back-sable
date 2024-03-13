const express = require("express");
const router = express.Router();
const userHandler = require("../handler/handler")

router.post("/sendemail", userHandler.sendEmail)

module.exports = router;