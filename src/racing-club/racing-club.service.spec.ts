import { Test, TestingModule } from '@nestjs/testing';
import { RacingClubService } from './racing-club.service';

describe('RacingClubService', () => {
  let service: RacingClubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacingClubService],
    }).compile();

    service = module.get<RacingClubService>(RacingClubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
