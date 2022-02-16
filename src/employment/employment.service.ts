import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateEvent } from 'typeorm';
import { CreateEmploymentDto } from './dtos/create-employment.dto';
import { UpdateEmploymentDto } from './dtos/update-employment.dto';
import { Employment } from './employment.entity';

@Injectable()
export class EmploymentService {
  constructor(
    @InjectRepository(Employment)
    private employmentRepository: Repository<Employment>,
  ) {}

  getAllEmployments() {
    return this.employmentRepository.find();
  }

  async getOneEmployment(id: number) {
    const employment = await this.employmentRepository.findOne(id);
    if (!employment) {
      throw new NotFoundException(
        `Employment with id ${id} could not been found`,
      );
    }

    return employment;
  }

  async create(employment: CreateEmploymentDto) {
    const employmentItem = await this.employmentRepository.create(employment);
    return this.employmentRepository.save(employmentItem);
  }

  async update(id: number, employment: UpdateEmploymentDto) {
    const employmentItem = await this.employmentRepository.findOne(id);
    if (!employment) {
      throw new NotFoundException(
        `Employment with id ${id} could not been found`,
      );
    }

    Object.assign(employmentItem, employment);

    return this.employmentRepository.save(employmentItem);
  }

  async remove(id: number) {
    const employment = await this.employmentRepository.findOne(id);
    if (!employment) {
      throw new NotFoundException(
        `Employment with id ${id} could not been found`,
      );
    }

    return this.employmentRepository.remove(employment);
  }
}
