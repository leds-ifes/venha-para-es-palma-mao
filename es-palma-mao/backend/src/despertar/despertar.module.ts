import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { CandidatoController } from './controller/candidato.controller';
import { CandidatoService } from './service/candidato.service';
import { CandidatoProvider } from './service/provider/candidato.provider';
import { ConcursosService } from './service/concursos.service';
import { ConcursosProvider } from './service/provider/concursos.provider';
import { ConcursosController } from './controller/concursos.controller';

@Module({
  imports: [],
  controllers: [CandidatoController,ConcursosController],
  providers: [...databaseProviders, ...CandidatoProvider, ...ConcursosProvider, CandidatoService, ConcursosService ],
}) 
export class DespertarModule {}
