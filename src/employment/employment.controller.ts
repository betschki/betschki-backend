import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEmploymentDto } from './dtos/create-employment.dto';
import { UpdateEmploymentDto } from './dtos/update-employment.dto';
import { EmploymentService } from './employment.service';

@Controller('employment')
export class EmploymentController {
  constructor(private employmentService: EmploymentService) {}

  @Get()
  getAllEmployments() {
    return this.employmentService.getAllEmployments();
  }

  @Get('id')
  getOneEmployment(@Param('id') id: string) {
    return this.employmentService.getOneEmployment(parseInt(id));
  }

  @Post()
  createEmployment(@Body() employment: CreateEmploymentDto) {
    return this.employmentService.create(employment);
  }

  @Patch('/:id')
  updateEmployment(
    @Param('id') id: string,
    @Body() employment: UpdateEmploymentDto,
  ) {
    return this.employmentService.update(parseInt(id), employment);
  }

  @Delete('/:id')
  removeEmployment(@Param('id') id: string) {
    return this.employmentService.remove(parseInt(id));
  }
}
