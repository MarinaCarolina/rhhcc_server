import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AnalyticsService } from './analytics.service';

@Module({
  imports: [EventEmitterModule.forRoot()],
  providers: [AnalyticsService],
  exports: [AnalyticsService],
})
export class AnalyticsModule {}
