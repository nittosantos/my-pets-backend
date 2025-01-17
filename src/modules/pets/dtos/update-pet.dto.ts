import { z } from 'zod';

export const UpdatePetSchema = z.object({
  name: z.string().min(2).optional(),
  type: z
    .enum(['dog', 'cat', 'bird', 'other'], { message: 'Tipo inválido.' })
    .optional(),
  breed: z.string().optional(),
  age: z.number().int().nonnegative().optional(),
});

export type UpdatePetDto = z.infer<typeof UpdatePetSchema>;
