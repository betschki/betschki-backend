import { IsArray, IsString } from 'class-validator';

export class CreateEmploymentDto {
  @IsString()
  position: string;

  @IsString()
  company: string;

  @IsString()
  startDate: string;

  @IsString()
  endDate: string;

  @IsString()
  description: string;

  @IsArray()
  tags: string[];
}
