import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationInterceptor } from './common/interceptors/zod-validation.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ZodValidationInterceptor());
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
