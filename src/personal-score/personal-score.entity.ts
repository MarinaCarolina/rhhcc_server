import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';
import { RaceClass } from '../race-class/race-class.entity';

@Entity()
export class PersonalScore {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pilot, (pilot) => pilot.personalScores)
  pilot: Pilot;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.personalScores)
  raceClass: RaceClass;

  @Column()
  year: number;

  @Column()
  total_points: number;
}
