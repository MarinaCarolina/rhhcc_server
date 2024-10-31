import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  modification: string;

  @Column('float')
  weight: number;

  @Column()
  tire_model: string;

  @Column('float')
  tire_width: number;

  @Column('float')
  tire_diameter: number;
}
