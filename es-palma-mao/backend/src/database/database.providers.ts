
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'es_palma',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'nheyiykg',
      password: 'O-b9Is18F3UVFYM9sF1NWe6Lnw7W9DUG',
      database: 'nheyiykg',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];