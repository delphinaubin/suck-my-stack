import { Test, TestingModule } from '@nestjs/testing';
import { StackTopologyService } from './stack-topology.service';

describe('StackTopologyService', () => {
  let service: StackTopologyService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackTopologyService],
    }).compile();
    service = module.get<StackTopologyService>(StackTopologyService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
