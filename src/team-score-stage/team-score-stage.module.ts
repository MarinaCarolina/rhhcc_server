import { Module } from '@nestjs/common';
import { TeamScoreStageController } from './team-score-stage.controller';
import { TeamScoreStageService } from './team-score-stage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamScoreStage } from './team-score-stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeamScoreStage])],
  controllers: [TeamScoreStageController],
  providers: [TeamScoreStageService],
})
export class TeamScoreStageModule {}
