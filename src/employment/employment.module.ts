import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentController } from './employment.controller';
import { Employment } from './employment.entity';
import { EmploymentService } from './employment.service';

@Module({
  imports: [TypeOrmModule.forFeature([Employment])],
  controllers: [EmploymentController],
  providers: [EmploymentService],
})
export class EmploymentModule {}
