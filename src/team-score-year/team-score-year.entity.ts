import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RacingClub } from '../racing-club/racing-club.entity';

@Entity()
export class TeamScoreYear {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RacingClub, (club) => club.teamScoreYears)
  club: RacingClub;

  @Column()
  year: number;

  @Column()
  team_points: number;
}
