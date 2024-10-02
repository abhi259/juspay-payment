import { Test, TestingModule } from '@nestjs/testing';
import { JuspayService } from './juspay.service';

describe('JuspayService', () => {
  let service: JuspayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JuspayService],
    }).compile();

    service = module.get<JuspayService>(JuspayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
