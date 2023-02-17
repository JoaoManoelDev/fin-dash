import { Router } from 'express'
import { sessionRouter } from './session.route'
import { transactionRouter } from './transactions.route'
import { usersRoutes } from './users.route'

export const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/session', sessionRouter)
routes.use('/transaction', transactionRouter)
