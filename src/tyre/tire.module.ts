import { Module } from '@nestjs/common';
import { TireController } from './tire.controller';
import { TireService } from './tire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsModule } from '../utils/analytics/analytics.module';
import { Tire } from './tire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tire]), AnalyticsModule],
  controllers: [TireController],
  providers: [TireService],
})
export class TireModule {}
