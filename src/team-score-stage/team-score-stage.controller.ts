import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeamScoreStageService } from './team-score-stage.service';
import { TeamScoreStage } from './team-score-stage.entity';

@Controller('team-score-stage')
export class TeamScoreStageController {
  constructor(private readonly teamScoreStageService: TeamScoreStageService) {}

  @Get()
  findAll(): Promise<TeamScoreStage[]> {
    return this.teamScoreStageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeamScoreStage> {
    return this.teamScoreStageService.findOne(id);
  }

  @Post()
  create(@Body() teamScoreStage: TeamScoreStage): Promise<TeamScoreStage> {
    return this.teamScoreStageService.create(teamScoreStage);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teamScoreStageService.remove(id);
  }
}
