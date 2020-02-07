import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { concursos } from '../model/concursos.entity';

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
}