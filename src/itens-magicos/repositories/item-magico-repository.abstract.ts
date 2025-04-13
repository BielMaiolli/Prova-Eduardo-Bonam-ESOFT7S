import { CreateItemMagicoDTO } from "../dtos/create-item-magico.dto";
import { UpdateItemMagicoDTO } from "../dtos/update-item-magico.dto";
import { ItemMagico } from "../schemas/item-magico.schema";

export abstract class ItemMagicoRepository {

    abstract create(createItemMagicoDTO: CreateItemMagicoDTO): Promise<ItemMagico>;
    abstract findAll(): Promise<ItemMagico[] | null>;
    abstract findById(id: String): Promise<ItemMagico | null>;
    abstract deleteById(id: String): Promise<ItemMagico | null>;
    abstract updateById(id: String, updateItemMagicoDTO: UpdateItemMagicoDTO): Promise<ItemMagico | null>;
    
    //------------------------------Rotas--Adicionais----------------------------------------------------//

    abstract findItemMagicoByIdentificador(identificador: String): Promise<ItemMagico | null>;
}