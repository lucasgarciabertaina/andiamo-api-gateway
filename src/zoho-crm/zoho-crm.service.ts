import { Injectable } from '@nestjs/common';
import init from './services/init';
import getRecord from './services/getRecord';

@Injectable()
export class ZohoCRMService {
  private self: any;

  async init(): Promise<void> {
    this.self = await init();
  }

  // async getRecord(moduleName, recordId: string): Promise<Object> {
  // return await getRecord(moduleName, recordId);
  // }

  getRecord: Function = getRecord;

  // example...
  async getModules(): Promise<Object> {
    try {
      const modulesOperations = new this.self.Modules.ModulesOperations();
      const response = await modulesOperations.getModules();
      return response;
    } catch (e) {
      throw e;
    }
  }
}
