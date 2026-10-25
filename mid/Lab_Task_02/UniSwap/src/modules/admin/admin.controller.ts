import { Controller, Delete, Get, Param, Patch, Post, Body } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto, UpdateAdminDto } from "./dto/admin.dto";

@Controller("admins")
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Get()
    async getAllAdmins() {
        return this.adminService.getAdmins();
    }

    @Get(":id")
    async getAdminById(@Param("id") id: string) {
        return this.adminService.getAdminById(id);
    }

    @Post()
    async createAdmin(@Body() createAdminDto: CreateAdminDto) {
        return this.adminService.createAdmin(createAdminDto);
    }

    @Patch(":id")
    async updateAdmin(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
        return this.adminService.updateAdmin(id, updateAdminDto);
    }

    @Delete(":id")
    async deleteAdmin(@Param("id") id: string) {
        return this.adminService.deleteAdmin(id);
    }
}    