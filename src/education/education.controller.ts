import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEducationDto } from './dtos/create-education.dto';
import { UpdateEducationDto } from './dtos/update-education.dto';
import { EducationService } from './education.service';

@Controller('education')
export class EducationController {
  constructor(private educationService: EducationService) {}

  @Get()
  getAllEducation() {
    return this.educationService.find();
  }

  @Get('/:id')
  getEducation(@Param('id') id: string) {
    return this.educationService.findOne(parseInt(id));
  }

  @Post()
  createEducation(@Body() education: CreateEducationDto) {
    return this.educationService.create(education);
  }

  @Patch('/:id')
  updateEducation(
    @Param('id') id: string,
    @Body() education: UpdateEducationDto,
  ) {
    return this.educationService.update(parseInt(id), education);
  }

  @Delete('/:id')
  removeEducation(@Param('id') id: string) {
    return this.educationService.remove(parseInt(id));
  }
}
