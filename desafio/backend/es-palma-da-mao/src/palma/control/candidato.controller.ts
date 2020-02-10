import { Controller, Get, Param } from "@nestjs/common";
import { CandidatoService } from "../service/candidato.service";

@Controller('candidato')
export class CandidatoController {
    constructor (private readonly candidatoService: CandidatoService) {}

    @Get()
    readAll(): any {
        return this.candidatoService.findAll();
    }

    @Get(':cpf')
    readOne(@Param('cpf') cpf): any {
        return this.candidatoService.findOne(cpf)
    }

    @Get('/concurso/:lstVagas')
    findWhere(@Param('lstVagas') lstVagas): any {
        return this.candidatoService.findWhere(lstVagas)
    }

}