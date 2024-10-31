import { Module } from '@nestjs/common';
import { RaceClassController } from './race-class.controller';
import { RaceClassService } from './race-class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RaceClass } from './race-class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RaceClass])],
  controllers: [RaceClassController],
  providers: [RaceClassService],
})
export class RaceClassModule {}
