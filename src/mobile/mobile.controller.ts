import { Controller, Get } from '@nestjs/common';
import { MobileService } from './mobile.service';

@Controller('mobile')
export class MobileController {
    constructor(private mobileService: MobileService) {}


    @Get()
    async getSpending() {
        return this.mobileService.getSpending();
    }


}
