import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
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
  @JoinColumn()
  results: Result[];

  @OneToMany(() => Pilot, (pilot) => pilot.raceClass)
  @JoinColumn()
  pilots: Pilot[];

  @OneToMany(() => PersonalScore, (personalScore) => personalScore.pilot)
  @JoinColumn()
  personalScores: PersonalScore[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
