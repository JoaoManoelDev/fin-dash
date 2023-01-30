import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository"

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
    await this.usersRepository.create({ email, name, password })
  }
}