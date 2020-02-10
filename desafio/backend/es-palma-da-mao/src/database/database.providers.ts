import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'motty.db.elephantsql.com',
      port: 5432,
      username: 'wljyrlgt',
      password: 'tnUZwV2qY3-iKdSajEwxT31ENJsY9mcn',
      database: 'wljyrlgt',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];