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

  // async findWhere(produtos) {
  //   console.log();
  //   return this.candidatoRepository
  //     .createQueryBuilder('cliente')
  //     .select('produtos')
  //     .where('cliente.produtos ilike :produtos', { produtos: `%${produtos}%` })
  //     .getRawMany();
  // }

  // async findOnlyColumn(id) {
  //   let retornoProduto = await this.candidatoRepository
  //     .createQueryBuilder()
  //     .select('produtos')
  //     .where({ id: id })
  //     .getRawOne();
  //   let listaProdutos = retornoProduto.produtos.split(',').map(tech => tech.trim())
  //   console.log(listaProdutos[0])
  //   return listaProdutos
  // }

}