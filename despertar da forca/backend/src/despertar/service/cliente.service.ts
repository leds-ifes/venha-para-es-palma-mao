  
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../model/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('cliente_database')
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }
}