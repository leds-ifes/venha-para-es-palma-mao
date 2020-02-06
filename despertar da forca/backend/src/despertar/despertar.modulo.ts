import { Module } from '@nestjs/common';
import { databaseProviders } from 'src/database/database.providers';
import { ClienteController } from './control/cliente.controller';
import { ClienteProvider } from './service/provider/cliente.provider';
import { ClienteService } from './service/cliente.service';


@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [...databaseProviders, ...ClienteProvider, ClienteService],
})
export class DespertarModelo {}
