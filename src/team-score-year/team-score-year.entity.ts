import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';

@Entity()
export class TeamScoreYear {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RacingClub, (club) => club.yearScores)
  club: RacingClub;

  @Column()
  year: number;

  @Column()
  team_points: number;
}
