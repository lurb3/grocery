import { Router } from 'express'
const AuthController = require("../controllers/AuthController")
const schema = require("../config/schemas/userSchema")
const formValidate = require("../middleware/formValidate")

const authRouter = Router()

authRouter.post("/", formValidate(schema), AuthController.login)

export default authRouter