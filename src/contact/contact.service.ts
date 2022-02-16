import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dtos/create-contact.dto';
import { UpdateContactDto } from './dtos/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private contactRepository: Repository<Contact>,
  ) {}

  find() {
    return this.contactRepository.find();
  }

  findOne(id: number) {
    const contactInfo = this.contactRepository.findOne(id);
    if (!contactInfo) {
      throw new NotFoundException(`Contact info with id ${id} not found`);
    }
    return contactInfo;
  }

  async create(contact: CreateContactDto) {
    const contactInformation = this.contactRepository.create(contact);
    return this.contactRepository.save(contactInformation);
  }

  async update(id: number, contact: UpdateContactDto) {
    const contactInfo = await this.findOne(id);
    if (!contactInfo) {
      throw new NotFoundException(`Contact info with id ${id} not found`);
    }

    Object.assign(contactInfo, contact);

    return this.contactRepository.save(contactInfo);
  }

  async remove(id: number) {
    const contactInfo = await this.findOne(id);
    if (!contactInfo) {
      throw new NotFoundException(`Contact info with id ${id} not found`);
    }

    return this.contactRepository.remove(contactInfo);
  }
}
