import { Test, TestingModule } from '@nestjs/testing';
import { ZohoCRMService } from './zoho-crm.service';

describe('ZohoCRMService', () => {
  let service: ZohoCRMService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZohoCRMService],
    }).compile();

    service = module.get<ZohoCRMService>(ZohoCRMService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
