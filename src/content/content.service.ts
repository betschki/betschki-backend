import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './content.entity';
import { CreateContentDto } from './dtos/create-content.dto';
import { UpdateContentDto } from './dtos/update-content.dto';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content) private contentRepository: Repository<Content>,
  ) {}

  find() {
    return this.contentRepository.find();
  }

  async findOne(id: number) {
    const content = await this.contentRepository.findOne(id);
    if (!content) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }

    return content;
  }

  create(content: CreateContentDto) {
    const contentItem = this.contentRepository.create(content);
    return this.contentRepository.save(contentItem);
  }

  async update(id: number, content: UpdateContentDto) {
    const contentItem = await this.contentRepository.findOne(id);
    if (!content) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }

    Object.assign(contentItem, content);

    return this.contentRepository.save(contentItem);
  }

  async remove(id: number) {
    const content = await this.contentRepository.findOne(id);
    if (!content) {
      throw new NotFoundException(`Content with id ${id} not found`);
    }

    return this.contentRepository.remove(content);
  }
}
