import { Controller, Delete, Get, Param, Patch, Post, Body } from "@nestjs/common";
import{ BuyerService } from "./buyer.service";
import { CreateBuyerDto, UpdateBuyerDto } from "./dto/buyer.dto";

@Controller("buyers")
export class BuyerController {
    constructor(private readonly buyerService: BuyerService) {}

    @Get()
    async getAllBuyers() {
        return this.buyerService.getBuyers();
    }

    @Get(":id")
    async getBuyerById(@Param("id") id: string) {
        return this.buyerService.getBuyerById(id);
    }

    @Post()
    async createBuyer(@Body() createBuyerDto: CreateBuyerDto) {
        return this.buyerService.createBuyer(createBuyerDto);
    }

    @Patch(":id")
    async updateBuyer(@Param("id") id: string, @Body() updateBuyerDto: UpdateBuyerDto) {
        return this.buyerService.updateBuyer(id, updateBuyerDto);
    }

    @Delete(":id")
    async deleteBuyer(@Param("id") id: string) {
        return this.buyerService.deleteBuyer(id);
    }
}    