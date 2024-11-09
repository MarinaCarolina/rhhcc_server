import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TyreService } from './tyre.service';
import { Tyre } from './tyre.entity';
import { IAnalytics } from '../utils/analytics/analytics.service';
import { UpdateTyreDto } from './dto/update-tyre.dto';

@Controller('tyre')
export class TyreController {
  constructor(private readonly tyreService: TyreService) {}

  @Get()
  findAll(): Promise<IAnalytics<Tyre[]>> {
    return this.tyreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IAnalytics<Tyre>> {
    return this.tyreService.findOne(id);
  }

  @Post()
  create(@Body() tyre: Tyre): Promise<IAnalytics<Tyre>> {
    return this.tyreService.create(tyre);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() tyre: UpdateTyreDto,
  ): Promise<IAnalytics<Tyre | null>> {
    return this.tyreService.update(id, tyre);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IAnalytics<void>> {
    return this.tyreService.remove(id);
  }
}
