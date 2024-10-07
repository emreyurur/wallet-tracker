import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { WebService } from './web.service';
import { DbServiceModule } from 'src/db-service/db-service.module';

@Module({
  imports: [DbServiceModule],
  controllers: [WebController],
  providers: [WebService]
})
export class WebModule {}
