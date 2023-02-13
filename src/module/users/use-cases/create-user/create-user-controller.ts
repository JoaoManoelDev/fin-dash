import { Request, Response } from 'express'
import { createUserBodyValidation } from './create-user-body-validation.ts '
import { container } from 'tsyringe'

import { CreateUserUseCase } from './create-user-use-case'

export class CreateUserController {
  async handler(request: Request, response: Response) {
    const { email, name, password } = createUserBodyValidation.parse(
      request.body,
    )

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({ email, name, password })

    return response.status(201).end()
  }
}
