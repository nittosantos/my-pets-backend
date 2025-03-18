import { z } from 'zod';
import { AppointmentStatus } from '@prisma/client';

export const UpdateAppointmentSchema = z.object({
  date: z.string().datetime().optional(),
  vetName: z
    .string()
    .min(3, 'O nome do veterinário deve ter pelo menos 3 caracteres.')
    .optional(),
  reason: z
    .string()
    .min(5, 'O motivo deve ter pelo menos 5 caracteres.')
    .optional(),
  notes: z.string().optional(),
  status: z.nativeEnum(AppointmentStatus).optional(),
});

export class UpdateAppointmentDto {
  static schema = UpdateAppointmentSchema;
}

export type UpdateAppointmentDtoType = z.infer<typeof UpdateAppointmentSchema>;
