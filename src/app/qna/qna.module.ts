import { Module } from '@nestjs/common';
import { QnaService } from './qna.service';
import { QnaController } from './qna.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QnaRepository } from './repository/qna.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([QnaRepository])
  ],
  controllers: [QnaController],
  providers: [QnaService]
})
export class QnaModule { }
