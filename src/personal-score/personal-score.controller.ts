import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PersonalScore } from './personal-score.entity';
import { PersonalScoreService } from './personal-score.service';

@Controller('personal-score')
export class PersonalScoreController {
  constructor(private readonly personalScoreService: PersonalScoreService) {}

  @Get()
  findAll(): Promise<PersonalScore[]> {
    return this.personalScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PersonalScore> {
    return this.personalScoreService.findOne(id);
  }

  @Post()
  create(@Body() personalScore: PersonalScore): Promise<PersonalScore> {
    return this.personalScoreService.create(personalScore);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personalScoreService.remove(id);
  }
}
