import { ApiProperty } from "@nestjs/swagger";
import { ClasseType } from "../enums/classe-type";
import { ItensMagicosType } from "src/itens-magicos/enums/itens-magicos.enum";

export class UpdatePersonagemDTO {
    
    @ApiProperty({ description: "Identificador do Personagem.", required: false  })
    identificador?: String;

    @ApiProperty({ description: "Nome do Personagem.", required: false  })
    nome?: String;

    @ApiProperty({ description: "Nome do Aventureiro.", required: false  })
    nomeAventureiro?: String;

    @ApiProperty({ 
        description: "Classe do Personagem.",
        required: false,
        enum: ClasseType, 
        isArray: false })
    classe?: ClasseType;

    @ApiProperty({ description: "Level do Personagem.", required: false  })
    level?: Number;

    @ApiProperty({ 
        description: "Itens Mágicos do Personagem.", 
        enum: ItensMagicosType,
        isArray: true,
        required: false })
    listaDeItensMagicos?: ItensMagicosType[];

    @ApiProperty({ description: "Força do Personagem.", required: false  })
    forca?: Number; 

    @ApiProperty({ description: "Defesa do Personagem.", required: false  })
    defesa?: Number;
}