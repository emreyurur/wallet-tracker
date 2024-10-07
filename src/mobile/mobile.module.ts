import { Module } from '@nestjs/common';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';
import { DbServiceModule } from 'src/db-service/db-service.module';

@Module({
  imports: [DbServiceModule],
  controllers: [MobileController],
  providers: [MobileService]
})
export class MobileModule {}
