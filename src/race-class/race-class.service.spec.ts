import { Test, TestingModule } from '@nestjs/testing';
import { RaceClassService } from './race-class.service';

describe('RaceClassService', () => {
  let service: RaceClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaceClassService],
    }).compile();

    service = module.get<RaceClassService>(RaceClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
