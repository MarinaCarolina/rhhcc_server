import { Module } from '@nestjs/common';
import { TyreController } from '././tyre.controller';
import { TyreService } from './tyre.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsModule } from '../utils/analytics/analytics.module';
import { Tyre } from './tyre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tyre]), AnalyticsModule],
  controllers: [TyreController],
  providers: [TyreService],
})
export class TyreModule {}
