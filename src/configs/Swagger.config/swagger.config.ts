import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function SwaggerConfig(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('RPG API')
    .setDescription('API relacionado e jogos de RPG')
    .setVersion('1.0')
    .addTag('RGP')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}