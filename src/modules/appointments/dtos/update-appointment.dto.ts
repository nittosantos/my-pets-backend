import { z } from 'zod';

export const UpdateAppointmentSchema = z.object({
  date: z.string().datetime().optional(),
  vetName: z.string().min(3).optional(),
  reason: z.string().min(5).optional(),
  notes: z.string().optional(),
  status: z.enum(['scheduled', 'completed', 'canceled']).optional(),
});

export class UpdateAppointmentDto {
  static schema = UpdateAppointmentSchema;
}

export type UpdateAppointmentDtoType = z.infer<typeof UpdateAppointmentSchema>;
