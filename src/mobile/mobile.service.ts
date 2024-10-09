import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-service/db-service.service';
import { MobileDto } from './mobileDto/mobile.dto';
@Injectable()
export class MobileService {
    constructor(private dbServiceModule: PrismaService) {}


    async getSpending(walletAddress : MobileDto['walletAddress']) : Promise<object> {
        const data = await this.dbServiceModule.spending.findMany();
        return data;
    }
}
