import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './dtos/create-education.dto';
import { UpdateEducationDto } from './dtos/update-education.dto';
import { Education } from './education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private contactRepository: Repository<Education>,
  ) {}

  find() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }

    return this.contactRepository.findOne(id);
  }

  create(education: CreateEducationDto) {
    const educationItem = this.contactRepository.create(education);
    return this.contactRepository.save(education);
  }

  async update(id: number, education: UpdateEducationDto) {
    const educationItem = await this.findOne(id);
    if (!educationItem) {
      throw new NotFoundException(`Education item with id ${id} not found`);
    }

    Object.assign(educationItem, education);

    return this.contactRepository.save(educationItem);
  }

  async remove(id: number) {
    const educationItem = await this.findOne(id);
    if (!educationItem) {
      throw new NotFoundException(`Education item with id ${id} not found`);
    }

    return this.contactRepository.remove(educationItem);
  }
}
