import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';
import { Stage } from '../stage/stage.entity';
import { RacingClub } from '../racing-club/racing-club.entity';
import { Car } from '../car/car.entity';
import { RaceClass } from '../race-class/race-class.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pilot, (pilot) => pilot.results)
  pilot: Pilot;

  @Column('time')
  time: string;

  @ManyToOne(() => Stage, (stage) => stage.results)
  stage: Stage;

  @ManyToOne(() => RacingClub, (club) => club.results)
  club: RacingClub;

  @Column()
  weather_conditions: string;

  @Column()
  place: number;

  @Column()
  personal_points: number;

  @Column()
  team_points: number;
}
