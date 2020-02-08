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
}
