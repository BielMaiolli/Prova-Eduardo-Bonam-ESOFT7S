import { Inject, Injectable } from '@nestjs/common';
import { PersonagemRepository } from './repositories/personagem-repository.abstract';
import { CreatePersonagemDTO } from './dtos/create-personagem.dto';
import { UpdatePersonagemDTO } from './dtos/update-personagem.dto';
import { AddItemMagicoAoPersonagemDTO } from './dtos/add-item-magico-ao-personagem.dto';
import { ItensMagicosType } from 'src/itens-magicos/enums/itens-magicos.enum';
import { UpdateNomeAventureiroPorIdentificadorDTO } from './dtos/update-nome-aventureiro-por-identificador.dto';
import { Personagem } from './schemas/personagem.schema';

@Injectable()
export class PersonagemService {

    constructor(
        @Inject('PERSONAGEM_REPOSITORY')
        private readonly personagemRepository: PersonagemRepository,
    ) {}

    async create(createPersonagemDTO: CreatePersonagemDTO) {

        const { forca, defesa } = createPersonagemDTO;
    
        const forcaNum = Number(forca);
        const defesaNum = Number(defesa);
        
        if ((forcaNum + defesaNum) !== 10 ) {
            throw new Error('A soma dos pontos de força e defesa tem que ser igual a 10.');
        }

        return this.personagemRepository.create(createPersonagemDTO);
    }

    async findAll() {
        return this.personagemRepository.findAll();
    }

    async findById(id: String) {
        return this.personagemRepository.findById(id);
    }

    async deleteById(id: String) {
        return this.personagemRepository.deleteById(id);
    }

    async updateById(id: String, updatePersonagemDTO: UpdatePersonagemDTO) {
        return this.personagemRepository.updateById(id, updatePersonagemDTO);
    }

    //------------------------------Rotas--Adicionais----------------------------------------------------//

    async findPersonagemByIdentificador(identificador: String) {
        return this.personagemRepository.findPersonagemByIdentificador(identificador);
    }

    async updateNomeAventureiroByIdentificador(identificador: String, updateNomeAventureiroByIdentificador: UpdateNomeAventureiroPorIdentificadorDTO) {
        return this.personagemRepository.updateNomeAventureiroByIdentificador(identificador, updateNomeAventureiroByIdentificador);
    }

    async addOuRemoverItemMagicoAoPersonagem(id: String, addItemMagicoAoPersonagemDTO: AddItemMagicoAoPersonagemDTO) {
        return this.personagemRepository.addOuRemoverItemMagicoAoPersonagem(id, addItemMagicoAoPersonagemDTO);
    }

    async findAmuletoPersonagem(id: String, tipoDoItem: ItensMagicosType.AMULETO) {
        return this.personagemRepository.findAmuletoPersonagem(id, tipoDoItem);
    }

    async findAllItensMagicosDoPersonagem(id: String) {
        return this.personagemRepository.findAllItensMagicosDoPersonagem(id);                                                                                      
    }
}
