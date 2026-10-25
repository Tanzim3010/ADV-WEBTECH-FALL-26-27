import { IsNotEmpty, IsOptional } from "class-validator";



export class CreateSellerDto {
    @IsNotEmpty()
    sellerName: string = "";

    @IsNotEmpty()
    sellerEmail: string = "";

    @IsNotEmpty()
    sellerPassword: string = "";

    @IsNotEmpty()
    sellerPhone: string = "";

    @IsOptional()
    sellerAddress: string = "";
}

export class UpdateSellerDto {
    @IsNotEmpty()
    sellerName: string = "";

    @IsNotEmpty()
    sellerEmail: string = "";

    @IsNotEmpty()
    sellerPassword: string = "";

    @IsNotEmpty()
    sellerPhone: string = "";

    @IsOptional()
    sellerAddress: string = "";
}