import { z } from 'zod';
import { PetType } from '@prisma/client';

export const UpdatePetSchema = z.object({
  name: z.string().min(2).optional(),
  type: z.nativeEnum(PetType).optional(),
  breed: z.string().optional(),
  age: z.number().int().nonnegative().optional(),
});

export class UpdatePetDto {
  static schema = UpdatePetSchema;
}

export type UpdatePetDtoType = z.infer<typeof UpdatePetSchema>;
