import { Router } from 'express'
import * as ListController from "../controllers/ListController"
//const schema = require("../config/schemas/userSchema")
//const formValidate = require("../middleware/formValidate")

const listsRouter = Router()

listsRouter.get("/", ListController.getLists)
listsRouter.post("/", ListController.createList)

export default listsRouter