import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  transform(value: unknown, metadata: ArgumentMetadata): any {
    // Verificar se o tipo do dado possui um esquema Zod associado
    const schema: ZodSchema<any> = (metadata.metatype as any)?.schema;
    if (!schema) {
      // Se não houver esquema, retorna o valor sem validação
      return value;
    }

    // Validação usando o esquema Zod
    const result = schema.safeParse(value);
    if (!result.success) {
      const errors = result.error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));
      throw new BadRequestException(errors);
    }

    return result.data; // Retornar os dados validados
  }
}
