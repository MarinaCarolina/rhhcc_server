import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
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
  club: RacingClub;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.pilots)
  raceClass: RaceClass;

  @OneToMany(() => PersonalScore, (personalScore) => personalScore.pilot)
  personalScores: PersonalScore[];

  @OneToMany(() => Result, (result) => result.raceClass)
  results: Result[];

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;
}
