import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from 'bcryptjs'

interface CreateUserData {
  name: string
  email: string
  password: string
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, name, password }: CreateUserData) {

    const emailAlreadyExists = await this.usersRepository.findUserByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('Email Already exists.')
    }

    const salt = 8
    const passwordHash = await hash(password, salt)

    await this.usersRepository.create({
      email,
      name,
      password: passwordHash
    })
  }
}
