import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CreateQnaDTO } from './dto/create-qna.dto';
import { QnaDTO } from './dto/qna.dto';
import { UpdateQnaDTO } from './dto/update-qna.dto';
import { QnaService } from './qna.service';

@ApiTags('QnA')
@Controller()
export class QnaController {
  constructor(private readonly qnaService: QnaService) { }

  @Get()
  @ApiOperation({ summary: 'QnA 전체 목록', description: 'QnA 전체 목록을 조회합니다' })
  async findAll(): Promise<QnaDTO[]> {
    // 얘는 entity로 리턴받아옴
    const qna = await this.qnaService.findAll();

    // plainToInstance : class-transformer 패키지
    // 매개변수로 DTO(오브젝트) 와 entity(다른 오브젝트)를 넣어서 변환시켜줌
    return plainToInstance(QnaDTO, qna);
  }

  @Get(':qna_seq')
  @ApiOperation({ summary: 'QnA 전체 목록', description: 'QnA를 조회합니다' })
  async findById(
    @Param('qna_seq') id: number,
  ): Promise<QnaDTO> {
    const qna = await this.qnaService.findById(id);
    if (!qna) {
      throw new NotFoundException('ID에 해당하는 QnA를 찾을 수 없습니다');
    }

    return plainToInstance(QnaDTO, qna);
  }

  @Post()
  @ApiOperation({ summary: 'QnA 글 추가', description: 'QnA 등록합니다.' })
  async create(
    @Body() body: CreateQnaDTO
  ): Promise<CreateQnaDTO> {
    const qna = await this.qnaService.create(body);
    console.log("qna", qna)

    if (!qna) {
      throw new NotFoundException('ID에 해당하는 QnA를 찾을 수 없습니다');
    }

    return plainToInstance(CreateQnaDTO, qna);
  }

  @Put(':id')
  @ApiOperation({ summary: 'QnA 전체 목록', description: 'QnA 전체 목록을 조회합니다' })
  async update(
    @Param('id') id: number, @Body() body: UpdateQnaDTO,
  ): Promise<UpdateQnaDTO> {
    const qna = this.qnaService.update(id, body);

    if (!qna) {
      throw new NotFoundException('ID에 해당하는 QnA를 찾을 수 없습니다');
    }

    return plainToInstance(UpdateQnaDTO, qna);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'QnA 전체 목록', description: 'QnA 전체 목록을 조회합니다' })
  async delete(
    @Param('id') id: number,
  ) {
    const qna = this.qnaService.delete(id);

    if (!qna) {
      throw new NotFoundException('ID에 해당하는 QnA를 찾을 수 없습니다');
    }

    return plainToInstance(QnaDTO, qna);
  }

}
