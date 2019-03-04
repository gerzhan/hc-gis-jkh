import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocument,
  SwaggerBaseConfig
} from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // NOTE: Enable CORS

  const swaggerOptions: SwaggerBaseConfig = new DocumentBuilder()
    .setTitle('Documentation  REST API  gateway "GIS JKH" ')
    .setDescription('Документация REST API шлюза ГИС ЖКХ')
    .setVersion('0.0.0')
    .addTag('dom_gosuslugi_ru')
    .build();

  const swaggerDocument: SwaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerOptions
  );
  SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3333, () => {
    console.log('Listening at http://localhost:3333');
  });
}

bootstrap();
