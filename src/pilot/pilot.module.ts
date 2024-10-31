import { Module } from '@nestjs/common';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pilot } from './pilot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pilot])],
  controllers: [PilotController],
  providers: [PilotService],
})
export class PilotModule {}
