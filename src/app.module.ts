import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagensModule } from './personagens/personagens.module';
import { ItensMagicosModule } from './itens-magicos/itens-magicos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PersonagensModule,
     ItensMagicosModule,
    MongooseModule.forRoot('mongodb://localhost:27017/role-playing-game'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
