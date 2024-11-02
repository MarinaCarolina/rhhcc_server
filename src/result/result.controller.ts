import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Result } from './result.entity';
import { ResultService } from './result.service';

@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @Get()
  findAll(): Promise<Result[]> {
    return this.resultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Result> {
    return this.resultService.findOne(id);
  }

  @Post()
  create(@Body() result: Result): Promise<Result> {
    return this.resultService.create(result);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.resultService.remove(id);
  }
}
