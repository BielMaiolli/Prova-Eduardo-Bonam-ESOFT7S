import { Module } from '@nestjs/common';
import { PersonagensController } from './personagens.controller';
import { PersonagensService } from './personagens.service';

@Module({
  controllers: [PersonagensController],
  providers: [PersonagensService]
})
export class PersonagensModule {}
