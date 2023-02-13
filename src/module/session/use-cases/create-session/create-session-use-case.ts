import { inject, injectable } from 'tsyringe'
import { IUsersRepository } from '../../../users/repositories/IUsersRepository'
import { AppError } from '../../../../error/app-error'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface IRequest {
  email: string
  password: string
}

@injectable()
export class CreateSessionUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest) {
    const user = await this.usersRepository.findUserByEmail(email)

    if (!user) {
      return new AppError('Incorrect email or password.', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      return new AppError('Incorrect email or password.', 401)
    }

    console.log(process.env.TOKEN_SECRET)

    if (!process.env.TOKEN_SECRET) {
      return new AppError('Not found token secret.', 404)
    }

    const token = sign({ email }, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: '15m',
    })

    const dataSession = {
      id: user.id,
      email: user.email,
      token,
    }

    return dataSession
  }
}
