import { IsOptional, IsString } from 'class-validator';

export class UpdateEmploymentDto {
  @IsString()
  @IsOptional()
  position: string;

  @IsString()
  @IsOptional()
  company: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsString()
  @IsOptional()
  startDate: string;

  @IsString()
  @IsOptional()
  endDate: string;

  @IsString()
  @IsOptional()
  description: string;
}
