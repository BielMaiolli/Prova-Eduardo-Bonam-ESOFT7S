import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ClasseType } from "../enums/classe-type";
import { ItensMagicosType } from "src/itens-magicos/enums/itens-magicos.enum";

export type PersonagemDocument = Personagem & Document;

@Schema()
export class Personagem {

    @Prop({ required: true })
    identificador: String;

    @Prop({ required: true })
    nome: String;

    @Prop({ required: true })
    nomeAventureiro: String;

    @Prop({ type: String, enum: ClasseType, required: true })
    classe: ClasseType;

    @Prop({ required: true })
    level: Number;

    @Prop({ type: [String], enum: ItensMagicosType, required: true })
    listaDeItensMagicos: ItensMagicosType[];

    @Prop({ required: true })
    forca: Number; 

    @Prop({ required: true })
    defesa: Number;
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);