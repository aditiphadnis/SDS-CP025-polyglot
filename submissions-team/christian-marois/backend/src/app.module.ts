import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CacheModule} from "@nestjs/cache-manager";

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 1000 * 60 * 60
    })
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
