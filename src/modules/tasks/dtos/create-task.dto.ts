import { z } from 'zod';
import { Recurrence } from '@prisma/client';

export const CreateTaskSchema = z.object({
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres.'),
  description: z.string().optional(),
  date: z.string().datetime(),
  recurrence: z.nativeEnum(Recurrence),
  petId: z.string().uuid(),
});

export class CreateTaskDto {
  static schema = CreateTaskSchema;
}

export type CreateTaskDtoType = z.infer<typeof CreateTaskSchema>;
