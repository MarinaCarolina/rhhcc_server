import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Track } from '../track/track.entity';
import { Result } from '../result/result.entity';
import { TeamScoreStage } from '../team-score-stage/team-score-stage.entity';

@Entity()
export class Stage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  year: number;

  @Column()
  configuration: string;

  @ManyToOne(() => Track, (track) => track.stages)
  @JoinColumn()
  track: Track;

  @OneToMany(() => Result, (result) => result.raceClass)
  @JoinColumn()
  results: Result[];

  @OneToMany(() => TeamScoreStage, (teamScore) => teamScore.stage)
  @JoinColumn()
  teamScores: TeamScoreStage[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
