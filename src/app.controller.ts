import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getItem(@Param() params): string {
    console.log(params);
    return `got req from ${params.name}`;
  }
  @Get()
  // globalでフィルターを適用しているから変わらないのだが。参照用として
  getItems() {
    return `Hello world`;
  }
}
