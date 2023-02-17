import { container } from 'tsyringe'
import { ITransactionsRepository } from '../../module/transactions/repositories/ITransactionsRepository'
import { TransactionsRepository } from '../../module/transactions/repositories/TransactionsRepository'
import { IUsersRepository } from '../../module/users/repositories/IUsersRepository'
import { UsersRepository } from '../../module/users/repositories/UsersReoisitory'

container.registerSingleton<IUsersRepository>(
  'IUsersRepository',
  UsersRepository,
)

container.registerSingleton<ITransactionsRepository>(
  'ITransactionsRepository',
  TransactionsRepository,
)
