import { Module } from '@nestjs/common';
import { ItensMagicosController } from './itens-magicos.controller';
import { ItemMagicoService } from './itens-magicos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemMagico, ItemMagicoSchema } from './schemas/item-magico.schema';
import { ITEM_MAGICO_REPOSITORY } from './constants/item-magico.constant';
import { ItemMagicoMongoRepository } from './repositories/item-magico-repository.mongodb';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ItemMagico.name, schema: ItemMagicoSchema }])
  ],
  controllers: [ItensMagicosController],
  providers: [
    ItemMagicoService,
    {
      provide: ITEM_MAGICO_REPOSITORY,
      useClass: ItemMagicoMongoRepository,
    }
  ]
})
export class ItensMagicosModule {}
