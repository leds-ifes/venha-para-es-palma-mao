import { Controller, Get } from "@nestjs/common";
import { ConcursoService } from "../service/concurso.service"

@Controller('concurso')
export class ConcursoController {
    constructor (private readonly concursoService: ConcursoService) {}

    @Get()
    readAll(): any {
        return this.concursoService.findAll();
    }

}