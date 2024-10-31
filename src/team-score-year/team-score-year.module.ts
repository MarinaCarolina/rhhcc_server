import { Module } from '@nestjs/common';
import { TeamScoreYearController } from './team-score-year.controller';
import { TeamScoreYearService } from './team-score-year.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamScoreYear } from './team-score-year.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamScoreYear])],
  controllers: [TeamScoreYearController],
  providers: [TeamScoreYearService],
})
export class TeamScoreYearModule {}
