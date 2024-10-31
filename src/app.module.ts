import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { StageModule } from './stage/stage.module';
import { TrackModule } from './track/track.module';
import { RaceClassModule } from './race-class/race-class.module';
import { RacingClubModule } from './racing-club/racing-club.module';
import { PilotModule } from './pilot/pilot.module';
import { CarModule } from './car/car.module';
import { ResultModule } from './result/result.module';
import { TeamScoreStageModule } from './team-score-stage/team-score-stage.module';
import { TeamScoreYearModule } from './team-score-year/team-score-year.module';
import { PersonalScoreModule } from './personal-score/personal-score.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT'), 10),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true, // только для разработки
      }),
      inject: [ConfigService],
    }),
    UserModule,
    StageModule,
    TrackModule,
    RaceClassModule,
    RacingClubModule,
    PilotModule,
    CarModule,
    ResultModule,
    TeamScoreStageModule,
    TeamScoreYearModule,
    PersonalScoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
