import { PartialType } from "@nestjs/swagger";
import { CreateQnaDTO } from "./create-qna.dto";

export class UpdateQnaDTO extends PartialType(CreateQnaDTO) {

}