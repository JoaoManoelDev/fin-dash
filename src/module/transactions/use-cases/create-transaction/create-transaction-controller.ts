import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateTransactionUseCase } from './create-transaction-use-case'

export class CreateTransactionController {
  async handler(request: Request, response: Response) {
    const { description, type, category, price } = request.body

    const createTransactionUseCase = container.resolve(CreateTransactionUseCase)

    await createTransactionUseCase.execute({
      category,
      description,
      price,
      type,
    })

    return response.status(201).end()
  }
}
