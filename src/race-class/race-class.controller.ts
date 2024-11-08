import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RaceClassService } from './race-class.service';
import { RaceClass } from './race-class.entity';
import { IAnalytics } from '../utils/analytics/analytics.service';
import { UpdateRaceClassDto } from './dto/update-race-class.dto';

@Controller('race-class')
export class RaceClassController {
  constructor(private readonly raceClassService: RaceClassService) {}

  @Get()
  findAll(): Promise<IAnalytics<RaceClass[]>> {
    return this.raceClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IAnalytics<RaceClass>> {
    return this.raceClassService.findOne(id);
  }

  @Post()
  create(@Body() raceClass: RaceClass): Promise<IAnalytics<RaceClass>> {
    return this.raceClassService.create(raceClass);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() raceClass: UpdateRaceClassDto,
  ): Promise<IAnalytics<RaceClass | null>> {
    return this.raceClassService.update(id, raceClass);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IAnalytics<void>> {
    return this.raceClassService.remove(id);
  }
}
