
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { QnaModule } from './app/qna/qna.module';

const routes: Routes = [
	{
		path: 'qna',
		module: QnaModule
	}
]

@Module({
	imports: [RouterModule.register(routes), QnaModule],
	exports: [RouterModule],
})
export class AppRoutingModule { }