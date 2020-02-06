import {Connection} from 'typeorm';
import { candidatos } from 'src/despertar/model/candidato.entity';


export const CandidatoProvider = [
    {
        provide: 'candidato_database',
        useFactory: (connection: Connection) => connection.getRepository(candidatos),
        inject: ['es_palma']
    }
]