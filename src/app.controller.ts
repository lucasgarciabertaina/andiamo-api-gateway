import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceBody } from './interface/index';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  toProcessSt(@Body() body: ServiceBody) {
    return this.appService.toProcessSt(body);
  }
}
