import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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
  pilots: Pilot[];

  @OneToMany(() => Result, (result) => result.raceClass)
  results: Result[];

  @OneToMany(() => TeamScoreStage, (teamScore) => teamScore.club)
  teamScores: TeamScoreStage[];

  @OneToMany(() => TeamScoreYear, (teamScoreYear) => teamScoreYear.club)
  teamScoreYears: TeamScoreStage[];
}
