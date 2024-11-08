import { Module } from '@nestjs/common';
import { RaceClassController } from './race-class.controller';
import { RaceClassService } from './race-class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceClass } from './race-class.entity';
import { AnalyticsModule } from '../utils/analytics/analytics.module';

@Module({
  imports: [TypeOrmModule.forFeature([RaceClass]), AnalyticsModule],
  controllers: [RaceClassController],
  providers: [RaceClassService],
})
export class RaceClassModule {}
