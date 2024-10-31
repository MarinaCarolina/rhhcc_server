import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stage } from './stage.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stage])],
  providers: [StageService],
  controllers: [StageController],
})
export class StageModule {}
