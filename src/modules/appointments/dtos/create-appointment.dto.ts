import { z } from 'zod';
import { AppointmentStatus } from '@prisma/client';

export const CreateAppointmentSchema = z.object({
  date: z.string().datetime(),
  vetName: z
    .string()
    .min(3, 'O nome do veterinário deve ter pelo menos 3 caracteres.'),
  reason: z.string().min(5, 'O motivo deve ter pelo menos 5 caracteres.'),
  notes: z.string().optional(),
  status: z.nativeEnum(AppointmentStatus).default('scheduled'),
  petId: z.string().uuid(),
});

export class CreateAppointmentDto {
  static schema = CreateAppointmentSchema;
}

export type CreateAppointmentDtoType = z.infer<typeof CreateAppointmentSchema>;
