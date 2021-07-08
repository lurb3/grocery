import { Router } from 'express'
import users from './users'
import lists from './lists'
import items from './items'
import auth from './auth'

const routes = Router()

routes.use('/users', users)
routes.use('/lists', lists)
routes.use('/items', items)
routes.use('/auth', auth)

export default routes;

