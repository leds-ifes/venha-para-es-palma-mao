import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DespertarModule } from './despertar/despertar.module';

@Module({
  imports: [DespertarModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
