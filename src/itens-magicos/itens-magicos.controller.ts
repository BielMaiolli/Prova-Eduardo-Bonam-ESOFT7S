import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ItemMagicoService } from './itens-magicos.service';
import { CreateItemMagicoDTO } from './dtos/create-item-magico.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { UpdateItemMagicoDTO } from './dtos/update-item-magico.dto';

@Controller('itens-magicos')
export class ItensMagicosController {

    constructor(private readonly itemMagicoService: ItemMagicoService) {}

    @Post('/create-item-magico')
    @ApiOperation({ summary: "Criar um novo Item Mágico." })
    @ApiResponse({ status: 201, description: "Pokemon criado com sucesso!" })
    async create(@Body() createItemMagicoDTO: CreateItemMagicoDTO) {
        return await this.itemMagicoService.create(createItemMagicoDTO);
    }

    @Get('/find-all-itens-magicos')
    @ApiOperation({ summary: "Listar todos os Itens Mágicos" })
    @ApiResponse({ status: 200, description: "Lista de Itens Mágicos retornada com sucesso!" })
    async findAll() {
        return await this.itemMagicoService.findAll();
    }

    @Get('/find-item-magico-by-id/:id')
    @ApiOperation({ summary: "Buscar um Item Mágico por Id." })
    @ApiParam({ name: 'id', description: "Id do Item Mágico." })
    @ApiResponse({ status: 200, description: "Item Mágico encontrado com sucesso!" })
    @ApiResponse({ status: 404, description: "Item Mágico não encontrado." })
    async findById(@Param('id') id: String) {
        return await this.itemMagicoService.findById(id);
    }

    @Delete('/delete-item-magico-by-id/:id')
    @ApiOperation({ summary: "Buscar um Item Mágico por Id." })
    @ApiResponse({ status: 200, description: "Item Mágico encontrado com sucesso!" })
    @ApiResponse({ status: 404, description: "Item Mágico não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Item Mágico." })
    async deleteById(@Param('id') id: String) {
        return await this.itemMagicoService.deleteById(id);
    }

    @Patch('/update-item-magico-by-id/:id')
    @ApiOperation({ summary: "Atualizar um Item Mágico por Id." })
    @ApiResponse({ status: 200, description: "Item Mágico atualizado com sucesso!" })
    @ApiResponse({ status: 404, description: "Item Mágico não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Item Mágico." })
    async updateById(@Param('id') id: String, @Body() updateItemMagicoDTO: UpdateItemMagicoDTO) {
        return await this.itemMagicoService.updateById(id, updateItemMagicoDTO);
    }
    //------------------------------Rotas--Adicionais----------------------------------------------------//

    @Get('/find-item-magico-by-identificador/:identificador')
    @ApiOperation({ summary: "Buscar um Item Mágico por Identificador." })
    @ApiParam({ name: 'identificador', description: "Identificador do Item Mágico." })
    @ApiResponse({ status: 200, description: "Item Mágico encontrado com sucesso!" })
    @ApiResponse({ status: 404, description: "Item Mágico não encontrado." })
    async findItemMagicoByIdentificador(@Param('identificador') identificador: String) {
        return await this.itemMagicoService.findItemMagicoByIdentificador(identificador);
    }
}
