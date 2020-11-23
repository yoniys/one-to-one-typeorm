import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create() {
    console.log("post")
    return this.appService.create2t()
  }
  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    // throw new BadRequestException();
    return this.appService.findOne(+id);
  }
  @Get('qqq')
  findOne2() {
    // throw new BadRequestException();
    return this.appService.QueryBuilder()
  }
}
