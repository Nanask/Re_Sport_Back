import { Injectable } from '@nestjs/common';
import { CreateQnaDTO } from './dto/create-qna.dto';
import { UpdateQnaDTO } from './dto/update-qna.dto';
import { QnaEntity } from './entity/qna.entity';
import { QnaRepository } from './repository/qna.repository';

@Injectable()
export class QnaService {

	constructor(
		private qnaRepository: QnaRepository,
	) { }

	async findAll(): Promise<QnaEntity[]> {
		return await this.qnaRepository.find();
	}

	async findById(id: number): Promise<QnaEntity> {
		return await this.qnaRepository.findOne({ where: { id } });
	}

	async create(body: CreateQnaDTO) {
		const qna = this.qnaRepository.create(body);

		return await this.qnaRepository.save(qna);
	}

	async update(id: number, body: UpdateQnaDTO) {
		const _qna = await this.qnaRepository.findOne({ where: { id } });
		const qna = this.qnaRepository.create({ ..._qna, ...body });

		return await this.qnaRepository.save(qna);
	}

	async delete(id: number) {
		const qna = await this.qnaRepository.findOne({ where: { id } });

		return await this.qnaRepository.softRemove(qna);
	}

}
