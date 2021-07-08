import express from 'express'
import * as ListController from "../controllers/ListController"
const router = express.Router()
//const schema = require("../config/schemas/userSchema")
//const formValidate = require("../middleware/formValidate")

router.get("/", ListController.getLists)
router.post("/", ListController.createList)
module.exports = router