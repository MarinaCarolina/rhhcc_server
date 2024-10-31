import { Test, TestingModule } from '@nestjs/testing';
import { PersonalScoreController } from './personal-score.controller';

describe('PersonalScoreController', () => {
  let controller: PersonalScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalScoreController],
    }).compile();

    controller = module.get<PersonalScoreController>(PersonalScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
