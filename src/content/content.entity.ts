import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  page: string;

  @Column()
  heading: string;

  @Column()
  subheading: string;

  @Column('longtext')
  content: string;
}
