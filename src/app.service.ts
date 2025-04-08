import { Injectable } from '@nestjs/common';
import { ZohoCRMService } from './zoho-crm/zoho-crm.service';
import { ServiceBody } from './interface';
require('dotenv').config();

@Injectable()
export class AppService {
  constructor(private readonly zohoCRMService: ZohoCRMService) {}

  async toProcessSt(serviceBody: ServiceBody): Promise<string> {
    await this.zohoCRMService.init();

    console.log('Example getting modules');
    const modules = await this.zohoCRMService.getModules();
    console.log('Modules:', modules);

    console.log('Example getting record');
    const { recordId, module } = serviceBody;
    const record = await this.zohoCRMService.getRecord(
      BigInt(recordId),
      module,
    );
    console.log('Record:', record);

    return process.env.TEST || 'TEST';
  }
}
