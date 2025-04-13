import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ClasseType } from "../enums/classe-type";
import { ItemMagico } from "src/itens-magicos/schemas/item-magico.schema";
import mongoose from "mongoose";

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

    @Prop({ type: [String], required: true })
    listaDeItensMagicos: ItemMagico[];

    @Prop({ required: true })
    forca: Number; 

    @Prop({ required: true })
    defesa: Number;
}

export const PersonagemSchema = SchemaFactory.createForClass(Personagem);