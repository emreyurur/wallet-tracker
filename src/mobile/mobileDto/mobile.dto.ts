import { ApiProperty } from "@nestjs/swagger";

export class MobileDto {
    @ApiProperty({ description: 'The amount of money spent' })
    amount: number;
    @ApiProperty({ description: 'The category of the money spent' })
    category: string;
    @ApiProperty({ description: 'The wallet address', required: true })
    walletAddress : string;

}