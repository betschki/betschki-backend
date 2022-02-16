import { Expose } from 'class-transformer';

export class ContactDto {
  @Expose()
  firstname: string;

  @Expose()
  surname: string;

  @Expose()
  street: string;

  @Expose()
  houseNumber: string;

  @Expose()
  zip: string;

  @Expose()
  city: string;

  @Expose()
  country: string;

  @Expose()
  email: string;
}
