import { ApiProperty } from "@nestjs/swagger";
import { ClasseType } from "../enums/classe-type";
import { ItensMagicosType } from "src/itens-magicos/enums/itens-magicos.enum";

export class CreatePersonagemDTO {
    
    @ApiProperty({ description: "Identificador do Personagem." })
    identificador: String;

    @ApiProperty({ description: "Nome do Personagem." })
    nome: String;

    @ApiProperty({ description: "Nome do Aventureiro." })
    nomeAventureiro: String;

    @ApiProperty({ 
        description: "Classe do Personagem.",
        enum: ClasseType, 
        isArray: false })
    classe: ClasseType;

    @ApiProperty({ description: "Level do Personagem." })
    level: Number;

    @ApiProperty({ 
        description: "Itens Mágicos do Personagem.", 
        enum: ItensMagicosType,
        isArray: true })
    listaDeItensMagicos: ItensMagicosType[];

    @ApiProperty({ description: "Força do Personagem." })
    forca: Number; 

    @ApiProperty({ description: "Defesa do Personagem." })
    defesa: Number;
}