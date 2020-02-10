import { Connection, Repository } from 'typeorm';
import { Concurso } from 'src/palma/model/concurso.entity';


export const ConcursoProvider = [
  {
    provide: 'concurso_database',
    useFactory: (connection: Connection) => connection.getRepository(Concurso),
    inject: ['DATABASE_CONNECTION'],
  },
]