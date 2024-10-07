import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-service/db-service.service';
@Injectable()
export class MobileService {
    constructor(private dbServiceModule: PrismaService) {}


    async getSpending() : Promise<any> {
        const data = await this.dbServiceModule.spending.findMany();
        return data;
    }
}
