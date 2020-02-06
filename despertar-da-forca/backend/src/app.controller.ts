import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  
  // @Get('/soma/:valor1/:valor2')
  // soma(@Param() params ): number {
  //   let valor1 = parseInt(params.valor1)
  //   let valor2 = parseInt(params.valor2)
  //   return this.appService.soma(valor1,valor2)
  // }

  // @Get('/soma/:valor1/:valor2')
  // soma2(@Param('valor1') valor1, @Param('valor2') valor2 ): number {
  //   let a = parseInt(valor1)
  //   let b = parseInt(valor2)
  //   return this.appService.soma(a,b)
  // }
}
