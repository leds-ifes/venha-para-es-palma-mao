import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PalmaModel } from './palma/palma.modulo';

@Module({
  imports: [PalmaModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
