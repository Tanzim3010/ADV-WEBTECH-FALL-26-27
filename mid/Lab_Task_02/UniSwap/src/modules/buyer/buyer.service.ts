import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Buyer } from "./entities/buyer.entity";
import { CreateBuyerDto } from "./dto/buyer.dto";


@Injectable()
export class BuyerService {
constructor(
  @InjectRepository(Buyer) private readonly buyerRepository: Repository<Buyer>,
) {}

async getBuyers() {
try {
        const buyers = await this.buyerRepository.find();
        return buyers;
    }
    catch (error) {
        console.error("Error fetching buyers:", error);
        throw error;
}
}

async getBuyerById(id: string) {
  try {
    const buyer = await this.buyerRepository.findOne({ where: { id } });
    
    if (!buyer) {
      throw new NotFoundException(`Buyer not found`);
    }
    
    return buyer;
  } catch (error) {
    throw error;
  }
}

async createBuyer(dto: CreateBuyerDto) {
try{
  const response = await this.buyerRepository.create(dto as any);
  return await this.buyerRepository.save(response);
}
catch (error) {
  throw error;
}}

async updateBuyer(id: string, dto: CreateBuyerDto) {
  try{
    console.log("id",id);
    if (!id) {
      throw new NotFoundException("Buyer with ID not found");
    }
    const buyer = await this.buyerRepository.findOne({ where: { id:id } });
    if (!buyer) {
      throw new NotFoundException("Buyer with ID not found");
    }
    Object.assign(buyer, dto);
    const {id: uid, ...rest}=buyer;
    return await this.buyerRepository.update({id:id}, rest);
  } 
  catch(error){
    throw error;
  }
}

async deleteBuyer(id: string) {
  try{
  const buyer = await this.buyerRepository.findOne({ where: { id:id } });
if (!buyer) {
  throw new NotFoundException("Buyer with ID not found");  
}
return await this.buyerRepository.delete({id:id});
  }
  catch(error){
    throw error;
  }
}}