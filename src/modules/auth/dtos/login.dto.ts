import { z } from 'zod';

export const LoginDtoSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 caracteres.' }),
});

export class LoginDto {
  static schema = LoginDtoSchema;
}

export type LoginDtoType = z.infer<typeof LoginDtoSchema>;
