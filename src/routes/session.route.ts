import { Router } from 'express'
import { CreateSessionController } from '../module/session/use-cases/create-session/create-session-controller'

export const sessionRouter = Router()

const createSessionController = new CreateSessionController()

sessionRouter.post('/', createSessionController.handler)
