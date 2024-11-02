import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';
import { Stage } from '../stage/stage.entity';

@Entity()
export class TeamScoreStage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RacingClub, (club) => club.teamScores)
  club: RacingClub;

  @ManyToOne(() => Stage, (stage) => stage.teamScores)
  stage: Stage;

  @Column()
  team_points: number;
}
