const express = require('express')
const router = express.Router()
const UserController = require("../controllers/UserController")
const schemaSignup = require("../config/schemas/userSignupSchema")
const formValidate = require("../middleware/formValidate")

router.post("/", formValidate(schemaSignup), UserController.signup)

module.exports = router