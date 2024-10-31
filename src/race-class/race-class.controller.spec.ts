import { Test, TestingModule } from '@nestjs/testing';
import { RaceClassController } from './race-class.controller';

describe('RaceClassController', () => {
  let controller: RaceClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaceClassController],
    }).compile();

    controller = module.get<RaceClassController>(RaceClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
