import { Router } from 'express'
import { CreateUserController } from '../module/users/use-cases/create-user/create-user-controller'

export const usersRoutes = Router()

const createUserController = new CreateUserController()

usersRoutes.post('/', createUserController.handler)
