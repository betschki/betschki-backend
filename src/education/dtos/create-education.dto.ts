import { IsArray, IsString } from 'class-validator';

export class CreateEducationDto {
  @IsString()
  degree: string;

  @IsString()
  school: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];
}
