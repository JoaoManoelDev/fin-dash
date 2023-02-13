import { z } from 'zod'

export const createUserBodyValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})
