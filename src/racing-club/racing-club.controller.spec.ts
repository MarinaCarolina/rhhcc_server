import { Test, TestingModule } from '@nestjs/testing';
import { RacingClubController } from './racing-club.controller';

describe('RacingClubController', () => {
  let controller: RacingClubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RacingClubController],
    }).compile();

    controller = module.get<RacingClubController>(RacingClubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
