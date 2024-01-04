import { Injectable } from '@nestjs/common';
import init from './service/init';

@Injectable()
export class ZohoCRMService {
  private self: any;
  
  async init(): Promise<void> {
    this.self = await init();
  }

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