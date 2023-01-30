import { prisma } from "../../../lib/prisma"
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { IUsersRepository } from "./IUsersRepository"

export class UsersRepository implements IUsersRepository {
  async create({ email, name, password, id }: ICreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        name,
        password,
        id
      }
    })
  }
}