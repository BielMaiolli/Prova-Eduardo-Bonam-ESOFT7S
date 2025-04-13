import { Injectable } from "@nestjs/common";
import { PersonagemRepository } from "./personagem-repository.abstract";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Personagem, PersonagemDocument } from "../schemas/personagem.schema";
import { CreatePersonagemDTO } from "../dtos/create-personagem.dto";
import { UpdatePersonagemDTO } from "../dtos/update-personagem.dto";
import { UpdateNomeAventureiroPorIdentificadorDTO } from "../dtos/update-nome-aventureiro-por-identificador.dto";
import { AddItemMagicoAoPersonagemDTO } from "../dtos/add-item-magico-ao-personagem.dto";
import { ItensMagicosType } from "src/itens-magicos/enums/itens-magicos.enum";
import { ItemMagico } from "src/itens-magicos/schemas/item-magico.schema";

@Injectable()
export class PersonagemMongoRepository implements PersonagemRepository {
    constructor(
        @InjectModel(Personagem.name) private personagemModel: Model<PersonagemDocument>,
    ) {}

    async create(createPersonagemDTO: CreatePersonagemDTO): Promise<Personagem> {
        const newPersonagem = new this.personagemModel(createPersonagemDTO);
        return newPersonagem.save();
    }

    async findAll(): Promise<Personagem[] | null> {
        return this.personagemModel.find().exec();
    }

    async findById(id: String): Promise<Personagem | null> {
        return this.personagemModel.findById(id).exec();
    }

    async deleteById(id: String): Promise<Personagem | null> {
        return this.personagemModel.findByIdAndDelete(id).exec();
    }

    async updateById(id: String, updatePersonagemDTO: UpdatePersonagemDTO): Promise<Personagem | null> {
        return this.personagemModel.findByIdAndUpdate(id, updatePersonagemDTO, { new: true }).exec();
    }

    //------------------------------Rotas--Adicionais----------------------------------------------------//

    async findPersonagemByIdentificador(identificador: String): Promise<Personagem | null> {
        return this.personagemModel.findOne({ identificador }).exec();
    }

    async updateNomeAventureiroByIdentificador(identificador: String, updateNomeAventureiroPorIdentificadorDTO: UpdateNomeAventureiroPorIdentificadorDTO): Promise<Personagem | null> {
        return this.personagemModel.findOneAndUpdate({ identificador }, updateNomeAventureiroPorIdentificadorDTO, { new: true }).exec();
    }

    async addOuRemoverItemMagicoAoPersonagem(_id: String, addItemMagicoAoPersonagemDTO: AddItemMagicoAoPersonagemDTO): Promise<Personagem | null> {
        return this.personagemModel.findOneAndUpdate({ _id }, addItemMagicoAoPersonagemDTO, { new: true }).exec();
    }
    
    async findAmuletoPersonagem(id: String, tipoDoItem: ItensMagicosType.AMULETO): Promise<Personagem | null> {
        return this.personagemModel.findById(id, tipoDoItem).exec();
    }
    
    async findAllItensMagicosDoPersonagem(id: String): Promise<Personagem | null> {
        return this.personagemModel.findById(id).exec();
    }
    
}