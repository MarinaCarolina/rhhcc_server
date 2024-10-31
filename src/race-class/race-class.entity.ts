import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Result } from '../result/result.entity';

@Entity()
export class RaceClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Result, (result) => result.raceClass)
  results: Result[];
}
