import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class EnvironmentService {
	constructor(private configService: ConfigService) { }

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'mysql',
			charset: 'utf8mb4',
			database: this.configService.get<string>('DB_NAME'),
			host: this.configService.get<string>('DB_HOST'),
			port: this.configService.get<number>('DB_PORT'),
			username: this.configService.get<string>('DB_USER'),
			password: this.configService.get<string>('DB_PASSWORD'),
			// 몰라요, 이거 안키면 엔티티 자동으로 생성안됨 ㅅㄱ
			synchronize: true,
			logging: 'all',
			logger: 'advanced-console',
			// entity 경로 설정
			entities: [`${__dirname}/../**/entity/*.entity.{ts,js}`],
			autoLoadEntities: true,
		}
	}
}
