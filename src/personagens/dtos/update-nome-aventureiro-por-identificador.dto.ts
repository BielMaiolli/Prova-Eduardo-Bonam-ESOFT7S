import { ApiProperty } from "@nestjs/swagger";

export class UpdateNomeAventureiroPorIdentificadorDTO {

    @ApiProperty({ description: "Nome do Aventureiro.", required: false  })
    nomeAventureiro?: String;
    
}