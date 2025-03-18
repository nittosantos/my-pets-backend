import { TaskStatus } from '@prisma/client';
import { Recurrence } from '@prisma/client';
import { z } from 'zod';

export const UpdateTaskSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
  recurrence: z.nativeEnum(Recurrence).optional(),
  status: z.nativeEnum(TaskStatus).optional(),
});

export class UpdateTaskDto {
  static schema = UpdateTaskSchema;
}

export type UpdateTaskDtoType = z.infer<typeof UpdateTaskSchema>;
