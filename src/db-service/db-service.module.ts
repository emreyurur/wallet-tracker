import { Module } from '@nestjs/common';
import { PrismaService } from './db-service.service';

@Module({
  providers: [PrismaService],
  exports : [PrismaService]
})
export class DbServiceModule {}
