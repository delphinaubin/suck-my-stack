import { Test, TestingModule } from '@nestjs/testing';
import { StackService } from './stack.service';

describe('StackService', () => {
  let service: StackService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackService],
    }).compile();
    service = module.get<StackService>(StackService);
  });
  describe('getAllStacks', () => {
    it('should return 3 sample stacks', () => {
      const result = service.getAllStacks();
      expect(result).toHaveLength(3);
    });
  });
});
