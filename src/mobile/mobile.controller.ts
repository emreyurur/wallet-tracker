import { Controller, Get, Query } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { MobileDto } from './mobileDto/mobile.dto';

@Controller('mobile')
export class MobileController {
    constructor(private mobileService: MobileService) {}


    @Get()
    async getSpending(@Query('walletAddress') walletAddress: MobileDto['walletAddress']) {
        return this.mobileService.getSpending(walletAddress);
    }


}
