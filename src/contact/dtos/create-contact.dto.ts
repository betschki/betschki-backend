import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  firstname: string;

  @IsString()
  surname: string;

  @IsString()
  street: string;

  @IsString()
  houseNumber: string;

  @IsString()
  zip: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsEmail()
  email: string;
}
