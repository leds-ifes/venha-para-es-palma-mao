import { Connection, Repository } from 'typeorm';
import { Candidato } from 'src/palma/model/candidato.entity';


export const CandidatoProvider = [
  {
    provide: 'candidato_database',
    useFactory: (connection: Connection) => connection.getRepository(Candidato),
    inject: ['DATABASE_CONNECTION'],
  },
]