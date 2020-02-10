import { CandidatoService } from './../service/candidato.service';
import { ConcursoService  } from './../service/concurso.service';
import { Controller, Get, Param} from "@nestjs/common";

@Controller('concurso')
export class ConcursoController {
    constructor (private readonly concursoService: ConcursoService,
        private readonly candidatoService: CandidatoService) {}

    @Get()
    readAll(): any {
        return this.concursoService.findAll();
    }

    @Get(':codigo_do_concurso')
    readOne(@Param('codigo_do_concurso') codigo_do_concurso): any {
        return this.concursoService.findOne(codigo_do_concurso)
    }

    @Get('/candidato/:profissoes')
    findWhere(@Param('profissoes') profissoes): any {
        return this.concursoService.findWhere(profissoes)
    }
}