  
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Candidato } from '../model/candidato.entity';

@Injectable()
export class CandidatoService {
  constructor(
    @Inject('candidato_database')
    private readonly candidatoRepository: Repository<Candidato>,
  ) {}

  async findAll(): Promise<Candidato[]> {
    return this.candidatoRepository.find();
  }

  async findOne(cpf) {
    return (await this.candidatoRepository.findOne({ cpf }))
  }

  async findWhere(vagas) {
    var listaVagas: string[]
    listaVagas = vagas.split(", ")

    console.log(listaVagas)
     const result = await this.candidatoRepository
      .createQueryBuilder('candidato')
      .select('nome, data_de_nascimento, cpf')
      .where('candidato.profissoes ilike :vaga1', { vaga1: '%' + listaVagas[0] + '%' })
      .orWhere('candidato.profissoes ilike :vaga2', { vaga2: '%' + listaVagas[1] + '%' })
      .orWhere('candidato.profissoes ilike :vaga3', { vaga3: '%' + listaVagas[2] + '%' })
      .getRawMany();
    return result
  }
}