import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CLIENT_ORIGIN,
    methods: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true,
  });
  await app.listen(2123);
}
bootstrap();
