const express = require('express')
const router = express.Router()
const ListController = require("../controllers/ListController")
//const schema = require("../config/schemas/userSchema")
//const formValidate = require("../middleware/formValidate")

router.get("/", ListController.getLists)
router.post("/", ListController.createList)
module.exports = router