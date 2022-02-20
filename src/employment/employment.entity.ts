import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  position: string;

  @Column()
  company: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column('longtext')
  description: string;

  @Column('simple-array')
  tags: string[];
}
