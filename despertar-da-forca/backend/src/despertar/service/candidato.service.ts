import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { candidatos } from '../model/candidato.entity';

@Injectable()
export class CandidatoService {
  constructor(
    @Inject('candidato_database')
    private readonly candidatoRepository: Repository<candidatos>,
  ) {}

  async findAll(): Promise<candidatos[]> {
      console.log(await this.candidatoRepository.find())
    return this.candidatoRepository.find();
  }


  async findOne(id): Promise<candidatos> {
    return this.candidatoRepository.findOne({ id: id });
  }

  async findWhere(profissao) {
    console.log();
    return this.candidatoRepository
      .createQueryBuilder('candidatos')
      .select('candidatos')
      .where('candidatos.profissoes ilike :profissao', { profissao: `%${profissao}%` })
      .getRawMany();
  }

  async findAptos(codigo_do_curso){
    console.log();
    return this.candidatoRepository
    .createQueryBuilder('candidatos')
    .select('candidatos.nome, candidatos.data_nasc, candidatos.cpf')
    .innerJoin('concursos', 'concursos', '(candidatos.profissoes = concursos.vagas)')
    .where('concursos.codigo_do_curso = :codigo_do_curso', { codigo_do_curso: `${codigo_do_curso}` })
    .getRawMany();    
  }

  // so da certo se o edital tiver o mesmo nome da vaga e da profissão (não dei split ou normalizei)

  // SELECT candidatos.nome, candidatos.data_nasc, candidatos.cpf FROM candidatos
  // INNER JOIN concursos ON candidatos.profissoes = concursos.vagas
  // WHERE concursos.codigo_do_curso = '10166314303'

}