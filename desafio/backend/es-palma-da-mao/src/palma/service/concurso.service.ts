
import { CandidatoService } from './candidato.service';
import { Candidato } from 'src/palma/model/candidato.entity';
import { Injectable, Inject} from '@nestjs/common';

import { Repository, getRepository } from 'typeorm';
import { Concurso } from '../model/concurso.entity';
import { TestingModuleBuilder } from '@nestjs/testing';

@Injectable()
export class ConcursoService {
  constructor(
    @Inject('concurso_database')
    private readonly concursoRepository: Repository<Concurso>,
  ) {}

  async findAll(): Promise<Concurso[]> {
    return this.concursoRepository.find();
  }

  async findOne(codigo_do_concurso) {
    return (await this.concursoRepository.findOne({ codigo_do_concurso: codigo_do_concurso }))
  }

 async findWhere(profissoes) {
    var listaProfissoes: string[] 
    listaProfissoes =  profissoes.split(", ")

    return await this.concursoRepository
      .createQueryBuilder('concurso')
      .select('orgao, codigo_do_concurso, edital')
      .where('concurso.lista_de_vagas ilike :profissao1', { profissao1: '%' + listaProfissoes[0] + '%' })
      .orWhere('concurso.lista_de_vagas ilike :profissao2', { profissao2: '%' + listaProfissoes[1] + '%' })
      .orWhere('concurso.lista_de_vagas ilike :profissao3', { profissao3: '%' + listaProfissoes[2] + '%' })
      .getRawMany();
  }  
} 