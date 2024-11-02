import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Result } from '../result/result.entity';
import { Pilot } from '../pilot/pilot.entity';
import { PersonalScore } from '../personal-score/personal-score.entity';

@Entity()
export class RaceClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Result, (result) => result.raceClass)
  results: Result[];

  @OneToMany(() => Pilot, (pilot) => pilot.raceClass)
  pilots: Pilot[];

  @OneToMany(() => PersonalScore, (personalScore) => personalScore.pilot)
  personalScores: PersonalScore[];
}
