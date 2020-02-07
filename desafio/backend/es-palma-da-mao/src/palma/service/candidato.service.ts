  
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
}