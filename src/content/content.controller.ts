import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dtos/create-content.dto';
import { UpdateContentDto } from './dtos/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Post()
  createContent(@Body() content: CreateContentDto) {
    return this.contentService.create(content);
  }

  @Get()
  getContent() {
    return this.contentService.find();
  }

  @Get('/:id')
  getSingleContent(@Param('id') id: string) {
    return this.contentService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateContent(@Param('id') id: string, @Body() content: UpdateContentDto) {
    return this.contentService.update(parseInt(id), content);
  }

  @Delete('/:id')
  removeContent(@Param('id') id: string) {
    return this.contentService.remove(parseInt(id));
  }
}
