import { Injectable } from '@nestjs/common';
import { ZohoCRMService } from './zoho-crm/zoho-crm.service';
require('dotenv').config();

@Injectable()
export class AppService {
  constructor(
    private readonly zohoCRMService: ZohoCRMService
  ) {}

  async toProcessSt(serviceBody: Object): Promise<string> {
    await this.zohoCRMService.init();
    console.log('Example getting modules');
    const modules = await this.zohoCRMService.getModules();
    console.log('Modules:', modules);
    return new Promise(() => process.env.TEST || "TEST");
  }
}
