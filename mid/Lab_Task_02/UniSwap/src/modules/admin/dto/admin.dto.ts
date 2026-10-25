import { IsNotEmpty, IsOptional } from "class-validator";



export class CreateAdminDto {
    @IsNotEmpty()
    adminName: string = "";

    @IsNotEmpty()
    adminEmail: string = "";

    @IsNotEmpty()
    adminPassword: string = "";

}

export class UpdateAdminDto {
    @IsNotEmpty()
    adminName: string = "";

    @IsNotEmpty()
    adminEmail: string = "";

    @IsNotEmpty()
    adminPassword: string = "";

}