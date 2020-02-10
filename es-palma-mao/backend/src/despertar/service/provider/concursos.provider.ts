import {Connection} from 'typeorm';
import { concursos } from 'src/despertar/model/concursos.entity';


export const ConcursosProvider = [
    {
        provide: 'concursos_database',
        useFactory: (connection: Connection) => connection.getRepository(concursos),
        inject: ['es_palma']
    }
]