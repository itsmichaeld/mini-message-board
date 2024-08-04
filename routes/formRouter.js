const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

router.get("/new", formController.message_create);

router.post("/new", formController.message_create_post);

module.exports = router;
