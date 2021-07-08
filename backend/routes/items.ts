const express = require('express')
const router = express.Router()
const ItemController = require("../controllers/ItemController")
//const schema = require("../config/schemas/userSchema")
//const formValidate = require("../middleware/formValidate")

router.get("/", ItemController.getItems)
router.post("/", ItemController.createItem)
module.exports = router