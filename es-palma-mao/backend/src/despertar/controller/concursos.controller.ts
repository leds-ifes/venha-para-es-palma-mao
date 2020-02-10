import { Get, Controller, Res, Param} from '@nestjs/common';
import { ConcursosService } from '../service/concursos.service';


@Controller('concursos')
export class ConcursosController {
  constructor(private readonly concursosService: ConcursosService) {}

  @Get()
  readAll():any {
    return this.concursosService.findAll();
  }

  @Get('/edital/:cpf')
  readWhere(@Param('cpf') cpf):any {
    return this.concursosService.findEdital(cpf)
  }
}
