import { Test, TestingModule } from '@nestjs/testing';
import { TeamScoreStageController } from './team-score-stage.controller';

describe('TeamScoreStageController', () => {
  let controller: TeamScoreStageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamScoreStageController],
    }).compile();

    controller = module.get<TeamScoreStageController>(TeamScoreStageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
