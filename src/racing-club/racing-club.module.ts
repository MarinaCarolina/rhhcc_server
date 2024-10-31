import { Module } from '@nestjs/common';
import { RacingClubController } from './racing-club.controller';
import { RacingClubService } from './racing-club.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RacingClub } from './racing-club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RacingClub])],
  controllers: [RacingClubController],
  providers: [RacingClubService],
})
export class RacingClubModule {}
