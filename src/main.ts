import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/configurations';

async function bootstrap() {
  const configs = config()
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));
  
  await app.listen(configs.port, () => {
    console.log(`Nest app listening on port ${configs.port}`)
  });
}
bootstrap();
