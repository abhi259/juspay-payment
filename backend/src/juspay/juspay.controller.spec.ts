import { Test, TestingModule } from '@nestjs/testing';
import { JuspayController } from './juspay.controller';

describe('JuspayController', () => {
  let controller: JuspayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JuspayController],
    }).compile();

    controller = module.get<JuspayController>(JuspayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
