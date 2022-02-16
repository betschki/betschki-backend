import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  degree: string;

  @Column()
  school: string;

  @Column()
  location: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  description: string;
}
