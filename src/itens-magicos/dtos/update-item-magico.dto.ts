import { ApiProperty } from "@nestjs/swagger";
import { ItensMagicosType } from "../enums/itens-magicos.enum";

export class UpdateItemMagicoDTO {

    @ApiProperty({ description: "Identificador do Item Mágico.", required: false })
    identificador?: String;

    @ApiProperty({ description: "Nome do Item Mágico.", required: false })
    nomeItem?: String;

    @ApiProperty({ 
        description: "Tipos de Itens Mágicos", 
        enum: ItensMagicosType, 
        isArray: false, 
        required: false })
    tipoDoItem?: ItensMagicosType;

    @ApiProperty({ description: "Força do Item Mágico.", required: false })
    forca?: Number;

    @ApiProperty({ description: "Defesa do Item Mágico.", required: false })
    defesa?: Number;
}