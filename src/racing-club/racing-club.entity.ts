import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Pilot } from '../pilot/pilot.entity';
import { Result } from '../result/result.entity';
import { TeamScoreStage } from '../team-score-stage/team-score-stage.entity';
import { TeamScoreYear } from '../team-score-year/team-score-year.entity';

@Entity()
export class RacingClub {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Pilot, (pilot) => pilot.club)
  @JoinColumn()
  pilots: Pilot[];

  @OneToMany(() => Result, (result) => result.raceClass)
  @JoinColumn()
  results: Result[];

  @OneToMany(() => TeamScoreStage, (teamScore) => teamScore.club)
  @JoinColumn()
  teamScores: TeamScoreStage[];

  @OneToMany(() => TeamScoreYear, (teamScoreYear) => teamScoreYear.club)
  @JoinColumn()
  teamScoreYears: TeamScoreStage[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
