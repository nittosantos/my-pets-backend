import { z } from 'zod';

export const CreateUserSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

export class CreateUserDto {
  static schema = CreateUserSchema;
}

export type CreateUserDtoType = z.infer<typeof CreateUserSchema>;
