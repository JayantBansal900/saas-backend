// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; // ✅ import this

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser()); // ✅ required to read cookies

  app.enableCors({
    origin: ['http://localhost:5173'], // ✅ frontend port
    credentials: true, // ✅ allow sending cookies
  });

  await app.listen(3000);
}
bootstrap();
