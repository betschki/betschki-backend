import { IsOptional, IsString } from 'class-validator';

export class UpdateContentDto {
  @IsString()
  @IsOptional()
  heading: string;

  @IsString()
  @IsOptional()
  subheading: string;

  @IsString()
  @IsOptional()
  content: string;
}
