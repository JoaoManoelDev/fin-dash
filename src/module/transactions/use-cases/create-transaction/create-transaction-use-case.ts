import { inject, injectable } from 'tsyringe'
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository'

interface ICreateTransactionData {
  description: string
  type: string
  category: string
  price: number
}

@injectable()
export class CreateTransactionUseCase {
  constructor(
    @inject('ITransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  async execute({
    category,
    description,
    price,
    type,
  }: ICreateTransactionData) {
    const a = await this.transactionsRepository.create({
      category,
      description,
      price,
      type,
      user_id: '4b83bcd7-fd59-4859-bc2f-4f573cf968c3',
    })

    console.log(a)
  }
}
