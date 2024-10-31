import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PersonalScore } from './personal-score.entity';

@Controller('personal-score')
export class PersonalScoreController {
  constructor(private readonly personalScoreService: PersonalScore) {}

  @Get()
  findAll(): Promise<PersonalScore[]> {
    return this.personalScoreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<PersonalScore> {
    return this.personalScoreService.findOne(Number(id));
  }

  @Post()
  create(@Body() personalScore: PersonalScore): Promise<PersonalScore> {
    return this.personalScoreService.create(personalScore);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.personalScoreService.remove(Number(id));
  }
}
