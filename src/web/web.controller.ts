import { Body, Controller, Post } from '@nestjs/common';
import { WebDto } from './webDTO/create.dto';
import { WebService } from './web.service';

@Controller('web')
export class WebController {
    constructor(private webService: WebService) {}

    @Post()
    create(@Body() webdto : WebDto) {
        return this.webService.create(webdto);
    }
}
