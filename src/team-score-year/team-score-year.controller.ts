import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TeamScoreYearService } from './team-score-year.service';
import { TeamScoreYear } from './team-score-year.entity';

@Controller('team-score-year')
export class TeamScoreYearController {
  constructor(private readonly teamScoreYearService: TeamScoreYearService) {}

  @Get()
  findAll(): Promise<TeamScoreYear[]> {
    return this.teamScoreYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<TeamScoreYear> {
    return this.teamScoreYearService.findOne(id);
  }

  @Post()
  create(@Body() teamScoreYear: TeamScoreYear): Promise<TeamScoreYear> {
    return this.teamScoreYearService.create(teamScoreYear);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.teamScoreYearService.remove(id);
  }
}
