import { Router } from 'express'
const UserController = require("../controllers/UserController")
const schemaSignup = require("../config/schemas/userSignupSchema")
const formValidate = require("../middleware/formValidate")

const usersRouter = Router()

usersRouter.post("/", formValidate(schemaSignup), UserController.signup)

export default usersRouter