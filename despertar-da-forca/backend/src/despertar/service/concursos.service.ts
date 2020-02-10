import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { concursos } from '../model/concursos.entity';
import { createConnection } from 'net';

@Injectable()
export class ConcursosService {
  constructor(
    @Inject('concursos_database')
    private readonly concursosRepository: Repository<concursos>,
  ) {}

  async findAll(): Promise<concursos[]> {
      console.log(await this.concursosRepository.find())
    return this.concursosRepository.find();
  }

  async findEdital(cpf){
    console.log();
    return this.concursosRepository
    .createQueryBuilder('concursos')
    .select('concursos.orgao, concursos.codigo_do_curso, concursos.edital')
    .innerJoin('candidatos', 'candidatos', '(candidatos.profissoes = concursos.vagas)')
    .where('candidatos.cpf = :cpf', { cpf: `${cpf}` })
    .getRawMany();    
  }
  // SELECT concursos.orgao, concursos.codigo_do_curso, concursos.edital FROM concursos
  // INNER JOIN candidatos ON candidatos.profissoes = concursos.vagas
  // WHERE candidatos.cpf = '313.699.709-84'
  // so da certo se a pessoa tiver apenas 1 profissão e o edital 1 vaga (não dei split ou normalizei)
}