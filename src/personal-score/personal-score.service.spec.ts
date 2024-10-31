import { Test, TestingModule } from '@nestjs/testing';
import { PersonalScoreService } from './personal-score.service';

describe('PersonalScoreService', () => {
  let service: PersonalScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalScoreService],
    }).compile();

    service = module.get<PersonalScoreService>(PersonalScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
