import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZohoCRMModule } from './zoho-crm/zoho-crm.module';
import { ZohoCRMService } from './zoho-crm/zoho-crm.service';

@Module({
  imports: [ZohoCRMModule],
  controllers: [AppController],
  providers: [AppService, ZohoCRMService],
})
export class AppModule {}
