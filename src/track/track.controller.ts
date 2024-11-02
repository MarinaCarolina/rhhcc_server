import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.entity';
import { IAnalytics } from '../utils/analytics/analytics.service';
import { UpdateTrackDto } from './dto/update-track.dto';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get()
  findAll(): Promise<IAnalytics<Track[]>> {
    return this.trackService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<IAnalytics<Track | null>> {
    return this.trackService.findOne(id);
  }

  @Post()
  create(@Body() track: Track): Promise<IAnalytics<Track>> {
    return this.trackService.create(track);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() track: UpdateTrackDto,
  ): Promise<IAnalytics<Track | null>> {
    return this.trackService.update(id, track);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IAnalytics<void>> {
    return this.trackService.remove(id);
  }
}
