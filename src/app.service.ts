import { Injectable } from '@nestjs/common';
import ZohoCRM from './zohoSDK';
require('dotenv').config();

@Injectable()
export class AppService {
  toProcessSt(serviceBody: Object): Promise<string> {
    ZohoCRM
      .initialize()
      .catch((error: void) => console.error('error', error))
      .then((info: void) => console.info('info', info))
      .finally((log: void) => console.log('log', log));
    return new Promise(() => process.env.TEST || "TEST");
  }
}
