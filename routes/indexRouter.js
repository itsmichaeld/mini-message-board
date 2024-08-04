const express = require("express");
const indexController = require("../controllers/indexController");

const router = express.Router();

router.get("/", indexController.messageboard_index);

router.get("/message/:index", indexController.message_details);

module.exports = router;
