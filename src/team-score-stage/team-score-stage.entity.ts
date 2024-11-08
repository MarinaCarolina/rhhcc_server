import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';
import { Stage } from '../stage/stage.entity';

@Entity()
export class TeamScoreStage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RacingClub, (club) => club.teamScores)
  @JoinColumn()
  club: RacingClub;

  @ManyToOne(() => Stage, (stage) => stage.teamScores)
  @JoinColumn()
  stage: Stage;

  @Column()
  team_points: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
