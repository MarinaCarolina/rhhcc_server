import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from './track.entity';
import { AnalyticsModule } from '../utils/analytics/analytics.module';

@Module({
  imports: [TypeOrmModule.forFeature([Track]), AnalyticsModule],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
