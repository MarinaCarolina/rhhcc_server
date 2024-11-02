import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PilotService } from './pilot.service';
import { Pilot } from './pilot.entity';

@Controller('pilot')
export class PilotController {
  constructor(private readonly pilotService: PilotService) {}

  @Get()
  findAll(): Promise<Pilot[]> {
    return this.pilotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pilot> {
    return this.pilotService.findOne(id);
  }

  @Post()
  create(@Body() pilot: Pilot): Promise<Pilot> {
    return this.pilotService.create(pilot);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pilotService.remove(id);
  }
}
