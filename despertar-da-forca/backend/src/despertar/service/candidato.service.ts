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
}