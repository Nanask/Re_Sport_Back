import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('qna')
export class QnaEntity extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	title: string;

	@Column()
	centername: string;

	@Column()
	content: string;

	@Column()
	date: Date;

	@Column({ default: 0 })
	count: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}