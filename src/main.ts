import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfig } from './configs/Swagger.config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerConfig(app);
  console.log("A rota do Swagger é: http://localhost:3000/api");
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
