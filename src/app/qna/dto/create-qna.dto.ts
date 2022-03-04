import { Exclude, Expose } from "class-transformer";
import { Timestamp } from 'typeorm';

@Exclude()
export class CreateQnaDTO {


	@Expose()
	email: string;

	@Expose()
	title: string;

	@Expose()
	centername: string;

	@Expose()
	content: string;

	@Expose()
	date: Date;

	@Expose()
	count: number;

	@Expose()
	createdAt: Date;
}