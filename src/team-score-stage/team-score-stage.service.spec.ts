import { Test, TestingModule } from '@nestjs/testing';
import { TeamScoreStageService } from './team-score-stage.service';

describe('TeamScoreStageService', () => {
  let service: TeamScoreStageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamScoreStageService],
    }).compile();

    service = module.get<TeamScoreStageService>(TeamScoreStageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
