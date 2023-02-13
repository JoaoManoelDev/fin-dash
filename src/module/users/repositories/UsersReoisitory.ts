import { User } from '@prisma/client'
import { prisma } from '../../../lib/prisma'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'
import { IUsersRepository } from './IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async create({ email, name, password, id }: ICreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        name,
        password,
        id,
      },
    })
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
