import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';
import { Stage } from '../stage/stage.entity';
import { RacingClub } from '../racing-club/racing-club.entity';
import { RaceClass } from '../race-class/race-class.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pilot, (pilot) => pilot.results)
  pilot: Pilot;

  @Column('time')
  time: string;

  @ManyToOne(() => Stage, (stage) => stage.results)
  @JoinColumn()
  stage: Stage;

  @ManyToOne(() => RacingClub, (club) => club.results)
  @JoinColumn()
  club: RacingClub;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.results)
  @JoinColumn()
  raceClass: RaceClass;

  @Column()
  weather_conditions: string;

  @Column('float')
  weight: number;

  @Column()
  place: number;

  @Column()
  personal_points: number;

  @Column()
  team_points: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
