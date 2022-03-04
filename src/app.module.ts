import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRoutingModule } from './app-routing.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentModule } from './environment/environment.module';
import { EnvironmentService } from './environment/environment.service';

@Module({
  // import 는 모듈단위로만 
  imports: [
    EnvironmentModule,
    AppRoutingModule,
    TypeOrmModule.forRootAsync({ useClass: EnvironmentService }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
