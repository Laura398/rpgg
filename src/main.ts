import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['https://mundi-bellum.onrender.com', 'https://www.mundi-bellum.lauramathieu.com/'],
    credentials: true,
  });

  await app.listen(3007);
}
bootstrap();
