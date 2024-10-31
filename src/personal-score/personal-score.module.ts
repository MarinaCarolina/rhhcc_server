import { Module } from '@nestjs/common';
import { PersonalScoreController } from './personal-score.controller';
import { PersonalScoreService } from './personal-score.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalScore } from './personal-score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalScore])],
  controllers: [PersonalScoreController],
  providers: [PersonalScoreService],
})
export class PersonalScoreModule {}
