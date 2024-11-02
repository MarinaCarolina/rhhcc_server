import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RaceClassService } from './race-class.service';
import { RaceClass } from './race-class.entity';

@Controller('race-class')
export class RaceClassController {
  constructor(private readonly raceClassService: RaceClassService) {}

  @Get()
  findAll(): Promise<RaceClass[]> {
    return this.raceClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RaceClass> {
    return this.raceClassService.findOne(id);
  }

  @Post()
  create(@Body() raceClass: RaceClass): Promise<RaceClass> {
    return this.raceClassService.create(raceClass);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.raceClassService.remove(id);
  }
}
