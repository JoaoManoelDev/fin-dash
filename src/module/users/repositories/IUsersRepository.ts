import { User } from '@prisma/client'
import { ICreateUserDTO } from '../dtos/ICreateUserDTO'

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>
  findUserByEmail(email: string): Promise<User | null>
}
