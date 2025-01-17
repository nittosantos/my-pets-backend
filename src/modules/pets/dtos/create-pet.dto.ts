import { z } from 'zod';

export const CreatePetSchema = z.object({
  name: z.string().min(2, 'O nome do pet deve ter pelo menos 2 caracteres.'),
  type: z.enum(['dog', 'cat', 'bird', 'other'], { message: 'Tipo inválido.' }),
  breed: z.string().optional(),
  age: z.number().int().nonnegative().optional(),
});

export type CreatePetDto = z.infer<typeof CreatePetSchema>;
