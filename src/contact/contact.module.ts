import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { Contact } from './contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactService } from './contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
