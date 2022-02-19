import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateEducationDto {
  @IsString()
  @IsOptional()
  degree: string;

  @IsString()
  @IsOptional()
  school: string;

  @IsString()
  @IsOptional()
  startDate: string;

  @IsString()
  @IsOptional()
  endDate: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @IsOptional()
  tags: string[];
}
