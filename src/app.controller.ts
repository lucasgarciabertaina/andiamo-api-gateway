import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  toProcessSt(@Body() body: Object) {
    return this.appService.toProcessSt(body);
  }
}
