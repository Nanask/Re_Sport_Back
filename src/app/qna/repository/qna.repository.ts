import { EntityRepository, Repository } from "typeorm";
import { QnaEntity } from "../entity/qna.entity";

@EntityRepository(QnaEntity)
export class QnaRepository extends Repository<QnaEntity>{

}