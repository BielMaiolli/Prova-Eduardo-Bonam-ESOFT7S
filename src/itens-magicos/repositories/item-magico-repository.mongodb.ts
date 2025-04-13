import { Injectable } from "@nestjs/common";
import { ItemMagicoRepository } from "./item-magico-repository.abstract";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ItemMagico, ItemMagicoDocument } from "../schemas/item-magico.schema";
import { CreateItemMagicoDTO } from "../dtos/create-item-magico.dto";
import { UpdateItemMagicoDTO } from "../dtos/update-item-magico.dto";

@Injectable()
export class ItemMagicoMongoRepository implements ItemMagicoRepository {
    constructor(
        @InjectModel(ItemMagico.name) private itemMagicoModel: Model<ItemMagicoDocument>,
    ) {}

    async create(createItemMagicoDTO: CreateItemMagicoDTO): Promise<ItemMagico> {
        const newItemMagico = new this.itemMagicoModel(createItemMagicoDTO);
        return newItemMagico.save();
    }

    async findAll(): Promise<ItemMagico[] | null> {
        return this.itemMagicoModel.find().exec();
    }

    async findById(id: String): Promise<ItemMagico | null> {
        return this.itemMagicoModel.findById(id).exec();
    }

    async deleteById(id: String): Promise<ItemMagico | null> {
        return this.itemMagicoModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: String, updateItemMagicoDTO: UpdateItemMagicoDTO): Promise<ItemMagico | null> {
        return this.itemMagicoModel.findByIdAndUpdate(id, updateItemMagicoDTO, { new: true }).exec();;
    }

    //------------------------------Rotas--Adicionais----------------------------------------------------//
    
    async findItemMagicoByIdentificador(identificador: String): Promise<ItemMagico | null> {
        return this.itemMagicoModel.findOne({ identificador }).exec();
    }
}