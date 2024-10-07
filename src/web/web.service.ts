import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db-service/db-service.service';
import { WebDto } from './webDTO/create.dto';

@Injectable()


export class WebService {

    constructor(private dbServiceModule: PrismaService) {}

    

    async create(webdto : WebDto): Promise<any> {
        const {amount, category} = webdto;
       const data = await this.dbServiceModule.spending.create({data : {amount : amount,  category : category, }})
        return {message : "success", data};
    }
}
