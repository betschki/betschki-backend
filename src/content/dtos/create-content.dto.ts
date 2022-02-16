import { IsString } from 'class-validator';

export class CreateContentDto {
  @IsString()
  heading: string;

  @IsString()
  subheading: string;

  @IsString()
  content: string;
}
