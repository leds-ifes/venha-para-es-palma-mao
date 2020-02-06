import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { CandidatoController } from './controller/candidato.controller';
import { CandidatoService } from './service/candidato.service';
import { CandidatoProvider } from './service/provider/candidato.provider';

@Module({
  imports: [],
  controllers: [CandidatoController],
  providers: [...databaseProviders, ...CandidatoProvider, CandidatoService ],
})
export class DespertarModule {}
