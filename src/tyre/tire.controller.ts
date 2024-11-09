import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TireService } from './tire.service';
import { Tire } from './tire.entity';
import { IAnalytics } from '../utils/analytics/analytics.service';
import { UpdateTireDto } from './dto/update-tire.dto';

@Controller('tire')
export class TireController {
  constructor(private readonly tireService: TireService) {}

  @Get()
  findAll(): Promise<IAnalytics<Tire[]>> {
    return this.tireService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IAnalytics<Tire>> {
    return this.tireService.findOne(id);
  }

  @Post()
  create(@Body() tire: Tire): Promise<IAnalytics<Tire>> {
    return this.tireService.create(tire);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() tire: UpdateTireDto,
  ): Promise<IAnalytics<Tire | null>> {
    return this.tireService.update(id, tire);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IAnalytics<void>> {
    return this.tireService.remove(id);
  }
}
