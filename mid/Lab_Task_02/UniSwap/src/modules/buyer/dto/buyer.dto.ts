import { IsNotEmpty, IsOptional } from "class-validator";



export class CreateBuyerDto {
    @IsNotEmpty()
    buyerName: string = "";

    @IsNotEmpty()
    buyerEmail: string = "";

    @IsNotEmpty()
    buyerPassword: string = "";

    @IsNotEmpty()
    buyerPhone: string = "";

    @IsOptional()
    buyerAddress: string = "";
}

export class UpdateBuyerDto {
    @IsNotEmpty()
    buyerName: string = "";

    @IsNotEmpty()
    buyerEmail: string = "";

    @IsNotEmpty()
    buyerPassword: string = "";

    @IsNotEmpty()
    buyerPhone: string = "";

    @IsOptional()
    buyerAddress: string = "";
}