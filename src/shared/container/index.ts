import { container } from 'tsyringe'
import { IUsersRepository } from '../../module/users/repositories/IUsersRepository'
import { UsersRepository } from '../../module/users/repositories/UsersReoisitory'

container.registerSingleton<IUsersRepository>(
  'IUsersRepository',
  UsersRepository,
)
