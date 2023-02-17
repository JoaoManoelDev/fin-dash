export interface ICreateTransactionDTO {
  id?: string
  description: string
  type: string
  category: string
  price: number
  user_id: string
  created_at?: Date
}
