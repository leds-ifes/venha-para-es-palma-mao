import { Get, Controller, Res, Param} from '@nestjs/common';
import { ClienteService } from '../service/cliente.service';


@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  readAll():any {
    return this.clienteService.findAll();
  }
}