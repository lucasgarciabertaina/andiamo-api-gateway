import { Module } from '@nestjs/common';
import { ZohoCRMService } from './zoho-crm.service';

@Module({
  providers: [ZohoCRMService],
  exports: [ZohoCRMService],
})
export class ZohoCRMModule {}