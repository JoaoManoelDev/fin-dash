import { prisma } from '../../../lib/prisma'
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO'
import { ITransactionsRepository } from './ITransactionsRepository'

export class TransactionsRepository implements ITransactionsRepository {
  async create({
    category,
    description,
    price,
    type,
    id,
    user_id,
    created_at,
  }: ICreateTransactionDTO): Promise<void> {
    console.log(user_id)
    await prisma.transaction.create({
      data: {
        category,
        description,
        price,
        type,
        id,
        user_id,
        created_at,
      },
    })
  }
}
