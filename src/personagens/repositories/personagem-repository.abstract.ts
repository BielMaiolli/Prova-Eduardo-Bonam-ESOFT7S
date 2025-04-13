import { ItemMagico } from "src/itens-magicos/schemas/item-magico.schema";
import { CreatePersonagemDTO } from "../dtos/create-personagem.dto";
import { UpdatePersonagemDTO } from "../dtos/update-personagem.dto";
import { Personagem } from "../schemas/personagem.schema";
import { AddItemMagicoAoPersonagemDTO } from "../dtos/add-item-magico-ao-personagem.dto";
import { ItensMagicosType } from "src/itens-magicos/enums/itens-magicos.enum";
import { UpdateNomeAventureiroPorIdentificadorDTO } from "../dtos/update-nome-aventureiro-por-identificador.dto";

export abstract class PersonagemRepository {

    abstract create(createPersonagemDTO: CreatePersonagemDTO): Promise<Personagem>;
    abstract findAll(): Promise<Personagem[] | null>;
    abstract findById(id: String): Promise<Personagem | null>;
    abstract deleteById(id: String): Promise<Personagem | null>;
    abstract updateById(id: String, updatePersonagemDTO: UpdatePersonagemDTO): Promise<Personagem | null>;
    
    //------------------------------Rotas--Adicionais----------------------------------------------------//

    abstract findPersonagemByIdentificador(identificador: String): Promise<Personagem | null>;
    abstract updateNomeAventureiroByIdentificador(identificador: String, updateNomeAventureiroPorIdentificadorDTO: UpdateNomeAventureiroPorIdentificadorDTO): Promise<Personagem | null>;
    abstract addOuRemoverItemMagicoAoPersonagem(id: String, addItemMagicoAoPersonagemDTO: AddItemMagicoAoPersonagemDTO): Promise<Personagem | null>;  //ROTA COM ERRO
    abstract findAmuletoPersonagem(id: String, tipoDoItem: ItensMagicosType.AMULETO): Promise<Personagem | null>;                                     //ROTA COM ERRO
    abstract findAllItensMagicosDoPersonagem(id: String): Promise<Personagem | null>;                                         //ROTA COM ERRO
}
