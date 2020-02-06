import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  soma(valor1: number,valor2: number): number {
    return valor1 + valor2
  }
}
