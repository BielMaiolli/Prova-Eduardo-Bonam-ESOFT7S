import { Inject, Injectable } from '@nestjs/common';
import { ItemMagicoRepository } from './repositories/item-magico-repository.abstract';
import { CreateItemMagicoDTO } from './dtos/create-item-magico.dto';
import { UpdateItemMagicoDTO } from './dtos/update-item-magico.dto';

@Injectable()
export class ItemMagicoService {
    constructor(
        @Inject('ITEM_MAGICO_REPOSITORY')
        private readonly itemMagicoRepository: ItemMagicoRepository,
    ) {}

    async create(createItemMagicoDTO: CreateItemMagicoDTO) {
        return this.itemMagicoRepository.create(createItemMagicoDTO);
    }

    async findAll() {
        return this.itemMagicoRepository.findAll();
    }

    async findById(id: String) {
        return this.itemMagicoRepository.findById(id);
    }

    async deleteById(id: String) {
        return this.itemMagicoRepository.deleteById(id);
    }

    async updateById(id: String, updateItemMagicoDTO: UpdateItemMagicoDTO) {
        return this.itemMagicoRepository.updateById(id, updateItemMagicoDTO);
    }

    //------------------------------Rotas--Adicionais----------------------------------------------------//

    async findItemMagicoByIdentificador(identificador: String) {
        return this.itemMagicoRepository.findItemMagicoByIdentificador(identificador);
    }
}
