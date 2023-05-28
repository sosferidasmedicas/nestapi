import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from 'dotenv';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  config();
  const configs = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Gerando Documentação')
    .setVersion('1.0')
    .addTag('Cliente')
    .build();
  const document = SwaggerModule.createDocument(app, configs);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3007);
}
bootstrap();
