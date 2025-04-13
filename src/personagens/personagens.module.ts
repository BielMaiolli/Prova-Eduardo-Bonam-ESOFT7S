import { Module } from '@nestjs/common';
import { PersonagensController } from './personagens.controller';
import { PersonagemService } from './personagem.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Personagem, PersonagemSchema } from './schemas/personagem.schema';
import { PERSONAGEM_REPOSITORY } from './constants/personagem.constant';
import { PersonagemMongoRepository } from './repositories/personagem-repository.mongodb';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Personagem.name, schema: PersonagemSchema }])
  ],
  controllers: [PersonagensController],
  providers: [
    PersonagemService,
    {
      provide: PERSONAGEM_REPOSITORY,
      useClass: PersonagemMongoRepository,
    }
  ]
})
export class PersonagensModule {}
