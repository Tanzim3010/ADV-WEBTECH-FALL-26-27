import { Controller, Delete, Get, Param, Patch, Post, Body } from "@nestjs/common";
import { SellerService } from "./seller.service";
import { CreateSellerDto, UpdateSellerDto } from "./dto/seller.dto";

@Controller("sellers")
export class SellerController {
    constructor(private readonly sellerService: SellerService) {}

    @Get()
    async getAllSellers() {
        return this.sellerService.getSellers();
    }

    @Get(":id")
    async getSellerById(@Param("id") id: string) {
        return this.sellerService.getSellerById(id);
    }

    @Post()
    async createSeller(@Body() createSellerDto: CreateSellerDto) {
        return this.sellerService.createSeller(createSellerDto);
    }

    @Patch(":id")
    async updateSeller(@Param("id") id: string, @Body() updateSellerDto: UpdateSellerDto) {
        return this.sellerService.updateSeller(id, updateSellerDto);
    }

    @Delete(":id")
    async deleteSeller(@Param("id") id: string) {
        return this.sellerService.deleteSeller(id);
    }
}    