import { ApiProperty } from "@nestjs/swagger";
import { ItensMagicosType } from "../enums/itens-magicos.enum";

export class CreateItemMagicoDTO {

    @ApiProperty({ description: "Identificador do Item Mágico."})
    identificador: String;

    @ApiProperty({ description: "Nome do Item Mágico."})
    nomeItem: String;

    @ApiProperty({ 
        description: "Tipos de Itens Mágicos", 
        enum: ItensMagicosType, 
        isArray: false })
    tipoDoItem: ItensMagicosType;

    @ApiProperty({ description: "Força do Item Mágico."})
    forca: Number;

    @ApiProperty({ description: "Defesa do Item Mágico."})
    defesa: Number;
}