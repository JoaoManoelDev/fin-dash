import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO'

export interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<void>
}
