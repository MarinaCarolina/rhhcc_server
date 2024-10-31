import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StageService } from './stage.service';
import { Stage } from './stage.entity';

@Controller('stages')
export class StageController {
  constructor(private readonly stageService: StageService) {}

  @Get()
  findAll(): Promise<Stage[]> {
    return this.stageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Stage> {
    return this.stageService.findOne(Number(id));
  }

  @Post()
  create(@Body() stage: Stage): Promise<Stage> {
    return this.stageService.create(stage);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stageService.remove(Number(id));
  }
}
