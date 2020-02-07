  
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Concurso } from '../model/concurso.entity';

@Injectable()
export class ConcursoService {
  constructor(
    @Inject('concurso_database')
    private readonly concursoRepository: Repository<Concurso>,
  ) {}

  async findAll(): Promise<Concurso[]> {
    return this.concursoRepository.find();
  }
}