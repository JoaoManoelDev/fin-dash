import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { createSessionBodyValidation } from './create-session-body-validation'
import { CreateSessionUseCase } from './create-session-use-case'

export class CreateSessionController {
  async handler(request: Request, response: Response) {
    const { email, password } = createSessionBodyValidation.parse(request.body)

    const createSessionUseCase = container.resolve(CreateSessionUseCase)

    const dataSession = await createSessionUseCase.execute({ email, password })

    return response.status(201).json({ dataSession })
  }
}
