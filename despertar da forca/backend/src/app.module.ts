import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespertarModelo } from './despertar/despertar.modulo';

@Module({
  imports: [DespertarModelo],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
