import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';
import { RaceClass } from '../race-class/race-class.entity';
import { Car } from '../car/car.entity';
import { Result } from '../result/result.entity';
import { PersonalScore } from '../personal-score/personal-score.entity';

@Entity()
export class Pilot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => RacingClub, (club) => club.pilots)
  @JoinColumn()
  club: RacingClub;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.pilots)
  @JoinColumn()
  raceClass: RaceClass;

  @OneToMany(() => PersonalScore, (personalScore) => personalScore.pilot)
  @JoinColumn()
  personalScores: PersonalScore[];

  @OneToMany(() => Result, (result) => result.raceClass)
  @JoinColumn()
  results: Result[];

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
