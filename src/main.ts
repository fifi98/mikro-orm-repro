import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { TransformResponseInterceptor } from './transform.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.useGlobalInterceptors(new TransformResponseInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000, process.env.HOST || '0.0.0.0');
}
bootstrap();
