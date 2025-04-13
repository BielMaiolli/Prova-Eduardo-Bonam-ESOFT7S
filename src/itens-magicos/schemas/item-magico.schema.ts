import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ItensMagicosType } from '../enums/itens-magicos.enum';

export type ItemMagicoDocument = ItemMagico & Document;

@Schema()
export class ItemMagico {

    @Prop({ required: true })
    identificador: String;

    @Prop({ required: true })
    nomeItem: String;

    @Prop({ type: String, enum: ItensMagicosType, required: true })
    tipoDoItem: ItensMagicosType;

    @Prop({ required: true })
    forca: Number;

    @Prop({ required: true })
    defesa: Number;

}

export const ItemMagicoSchema = SchemaFactory.createForClass(ItemMagico);