import { Test, TestingModule } from '@nestjs/testing';
import { TeamScoreYearController } from './team-score-year.controller';

describe('TeamScoreYearController', () => {
  let controller: TeamScoreYearController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamScoreYearController],
    }).compile();

    controller = module.get<TeamScoreYearController>(TeamScoreYearController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
