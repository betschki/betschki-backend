import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dtos/contact.dto';
import { CreateContactDto } from './dtos/create-contact.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { UpdateContactDto } from './dtos/update-contact.dto';

@Serialize(ContactDto)
@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  getAllContactInfo() {
    return this.contactService.find();
  }

  @Get('/:id')
  getOneContactInfo(@Param('id') id: string) {
    return this.contactService.findOne(parseInt(id));
  }

  @Post()
  createContactInfo(@Body() contact: CreateContactDto) {
    return this.contactService.create(contact);
  }

  @Patch('/:id')
  updateContactInfo(
    @Param('id') id: string,
    @Body() contact: UpdateContactDto,
  ) {
    return this.contactService.update(parseInt(id), contact);
  }

  @Delete('/:id')
  deleteContactInfo(@Param('id') id: string) {
    return this.contactService.remove(parseInt(id));
  }
}
