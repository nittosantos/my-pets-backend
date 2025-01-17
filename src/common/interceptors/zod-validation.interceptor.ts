import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ZodError } from 'zod';

@Injectable()
export class ZodValidationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        if (err instanceof ZodError) {
          const errorMessages = err.errors
            .map((e) => `${e.path.join('.')}: ${e.message}`)
            .join(', ');
          throw new BadRequestException(`Validation failed: ${errorMessages}`);
        }
        throw err; // rethrow any other errors
      }),
    );
  }
}
