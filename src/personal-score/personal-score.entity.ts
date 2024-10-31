import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';
import { RaceClass } from '../race-class/race-class.entity';

@Entity()
export class PersonalScore {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pilot, (pilot) => pilot.scores)
  pilot: Pilot;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.scores)
  raceClass: RaceClass;

  @Column()
  year: number;

  @Column()
  total_points: number;
}
