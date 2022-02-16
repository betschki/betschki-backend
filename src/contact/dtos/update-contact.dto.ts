import { IsEmail, IsString, IsOptional } from 'class-validator';

export class UpdateContactDto {
  @IsString()
  @IsOptional()
  firstname: string;

  @IsString()
  @IsOptional()
  surname: string;

  @IsString()
  @IsOptional()
  street: string;

  @IsString()
  @IsOptional()
  houseNumber: string;

  @IsString()
  @IsOptional()
  zip: string;

  @IsString()
  @IsOptional()
  city: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
