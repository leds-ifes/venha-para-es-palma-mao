import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { ConcursoController } from './control/concurso.controller';
import { CandidatoController } from './control/candidato.controller';
import { CandidatoProvider } from './service/provider/candidato.provider';
import { ConcursoProvider } from './service/provider/concurso.provider';
import { ConcursoService } from './service/concurso.service';
import { CandidatoService } from './service/candidato.service';


@Module({
  imports: [],
  controllers: [CandidatoController, ConcursoController],
  providers: [...databaseProviders, ...CandidatoProvider, ...ConcursoProvider,  CandidatoService, ConcursoService],
})
export class PalmaModel {}
