import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      useFactory: () => {
        return {
          stores: [createKeyv('REDIS_URL')], // Was originally using configService to pull url from env file
        };
      },
    }),
  ],
})
export class AppModule {}
