import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';
import { RaceClass } from '../race-class/race-class.entity';
import { Car } from '../car/car.entity';

@Entity()
export class Pilot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => RacingClub, (club) => club.pilots)
  club: RacingClub;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.pilots)
  raceClass: RaceClass;

  @OneToOne(() => Car)
  @JoinColumn()
  car: Car;
}
