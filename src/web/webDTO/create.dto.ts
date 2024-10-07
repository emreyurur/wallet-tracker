import { ApiProperty } from "@nestjs/swagger";

export class WebDto {
    @ApiProperty({ description: 'The amount of money spent' ,example: 100})
    amount: number;
    @ApiProperty({ description: 'The category of the money spent', example: 'food' })
    category: string;

}