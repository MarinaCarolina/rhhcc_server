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

@Entity()
export class TeamScoreYear {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => RacingClub, (club) => club.teamScoreYears)
  @JoinColumn()
  club: RacingClub;

  @Column()
  year: number;

  @Column()
  team_points: number;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
