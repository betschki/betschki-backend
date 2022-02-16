import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { Education } from './education.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationService } from './education.service';

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  controllers: [EducationController],
  providers: [EducationService],
})
export class EducationModule {}
