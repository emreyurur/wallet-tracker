import { Module } from '@nestjs/common';
import { WebModule } from './web/web.module';
import { MobileModule } from './mobile/mobile.module';
import { DbServiceModule } from './db-service/db-service.module';


@Module({
  imports: [WebModule, MobileModule, DbServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
