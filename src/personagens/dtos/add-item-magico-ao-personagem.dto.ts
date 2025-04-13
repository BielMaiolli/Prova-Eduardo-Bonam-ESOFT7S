import { ApiProperty } from "@nestjs/swagger";
import { ItemMagico } from "src/itens-magicos/schemas/item-magico.schema";

export class AddItemMagicoAoPersonagemDTO {
    
    @ApiProperty({ 
        description: "Itens Mágicos do Personagem.", 
        type: String,
        isArray: true,
        required: false })
    listaDeItensMagicos?: ItemMagico[];

}