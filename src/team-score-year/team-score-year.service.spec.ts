import { Test, TestingModule } from '@nestjs/testing';
import { TeamScoreYearService } from './team-score-year.service';

describe('TeamScoreYearService', () => {
  let service: TeamScoreYearService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeamScoreYearService],
    }).compile();

    service = module.get<TeamScoreYearService>(TeamScoreYearService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
