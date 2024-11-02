import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RacingClub } from './racing-club.entity';
import { RacingClubService } from './racing-club.service';

@Controller('racing-club')
export class RacingClubController {
  constructor(private readonly racingClubService: RacingClubService) {}

  @Get()
  findAll(): Promise<RacingClub[]> {
    return this.racingClubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<RacingClub> {
    return this.racingClubService.findOne(id);
  }

  @Post()
  create(@Body() racingClub: RacingClub): Promise<RacingClub> {
    return this.racingClubService.create(racingClub);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.racingClubService.remove(id);
  }
}
