import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  surname: string;

  @Column()
  street: string;

  @Column()
  houseNumber: string;

  @Column()
  zip: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  email: string;
}
