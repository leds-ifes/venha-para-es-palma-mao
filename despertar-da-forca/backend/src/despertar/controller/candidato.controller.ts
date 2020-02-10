import { Get, Controller, Res, Param} from '@nestjs/common';
import { CandidatoService } from '../service/candidato.service';


@Controller('candidato')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Get()
  readAll():any {
    return this.candidatoService.findAll();
  }

  @Get(':id')
  readOne(@Param('id') id):any {
    return this.candidatoService.findOne(id)
  }

  @Get('/profissao/:prof')
  readWhere(@Param('prof') prof):any {
    return this.candidatoService.findWhere(prof)
  }

  @Get('/aptos/:codigo_do_curso')
  readWhere2(@Param('codigo_do_curso') codigo_do_curso):any {
    return this.candidatoService.findAptos(codigo_do_curso)
  }
}
