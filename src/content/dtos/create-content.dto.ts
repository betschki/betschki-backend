import { IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  page: string;

  @IsString()
  heading: string;

  @IsString()
  subheading: string;

  @IsString()
  content: string;
}
