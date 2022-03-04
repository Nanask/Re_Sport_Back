import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// .env
// 1. dotenv 패키지
// 2. nestjs/config
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {

    // cors: {
    //   origin: 'http://localhost:3002',
    //   credentials: true,

    // },
  });

  // 스웨거 설정
  const config = new DocumentBuilder()
    .setTitle('API')
    .setVersion('1.0')
    .addBearerAuth()
    .addServer('http://localhost:3000')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // 여기까지 스웨거임
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
