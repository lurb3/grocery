import { Router } from 'express'
const ItemController = require("../controllers/ItemController")
//const schema = require("../config/schemas/userSchema")
//const formValidate = require("../middleware/formValidate")

const itemsRouter = Router()

itemsRouter.get("/", ItemController.getItems)
itemsRouter.post("/", ItemController.createItem)

export default itemsRouter