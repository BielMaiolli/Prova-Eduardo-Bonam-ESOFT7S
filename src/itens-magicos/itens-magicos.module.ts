import { Module } from '@nestjs/common';
import { ItensMagicosController } from './itens-magicos.controller';
import { ItensMagicosService } from './itens-magicos.service';

@Module({
  controllers: [ItensMagicosController],
  providers: [ItensMagicosService]
})
export class ItensMagicosModule {}
