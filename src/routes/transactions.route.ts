import { Router } from 'express'
import { CreateTransactionController } from '../module/transactions/use-cases/create-transaction/create-transaction-controller'

export const transactionRouter = Router()

const createTransactionController = new CreateTransactionController()

transactionRouter.post('/', createTransactionController.handler)
