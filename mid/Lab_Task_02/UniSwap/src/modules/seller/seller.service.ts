import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Seller } from "./entities/seller.entity";
import { CreateSellerDto } from "./dto/seller.dto";



@Injectable()
export class SellerService {
constructor(
  @InjectRepository(Seller) private readonly sellerRepository: Repository<Seller>,
) {}

async getSellers() {
try {
        const sellers = await this.sellerRepository.find();
        return sellers;
    }
    catch (error) {
        console.error("Error fetching sellers:", error);
        throw error;
}
}

async getSellerById(id: string) {
  try {
    const seller = await this.sellerRepository.findOne({ where: { id } });
    
    if (!seller) {
      throw new NotFoundException(`Seller not found`);
    }
    
    return seller;
  } catch (error) {
    throw error;
  }
}

async createSeller(dto: CreateSellerDto) {
try{
  const response = await this.sellerRepository.create(dto as any);
  return await this.sellerRepository.save(response);
}
catch (error) {
  throw error;
}}

async updateSeller(id: string, dto: CreateSellerDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Seller with ID not found");
    }
    const seller = await this.sellerRepository.findOne({ where: { id:id } });
    if (!seller) {
      throw new NotFoundException("Seller with ID not found");
    }
    Object.assign(seller, dto);
    const {id: uid, ...rest}=seller;
    return await this.sellerRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteSeller(id: string) {
  try{
  const seller = await this.sellerRepository.findOne({ where: { id:id } });
if (!seller) {
  throw new NotFoundException("Seller with ID not found");  
}
return await this.sellerRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}