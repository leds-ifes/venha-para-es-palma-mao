import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'tuffi.db.elephantsql.com',
      port: 5432,
      username: 'pyodnxmu',
      password: 'tVTGP-YLxfCeVSkz9592qLfiUlenYpiM',
      database: 'pyodnxmu',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];