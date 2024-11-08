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
import { RaceClass } from '../race-class/race-class.entity';

@Entity()
export class PersonalScore {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pilot, (pilot) => pilot.personalScores)
  @JoinColumn()
  pilot: Pilot;

  @ManyToOne(() => RaceClass, (raceClass) => raceClass.personalScores)
  @JoinColumn()
  raceClass: RaceClass;

  @Column()
  year: number;

  @Column()
  total_points: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
