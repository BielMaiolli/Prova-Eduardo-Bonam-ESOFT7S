import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PersonagemService } from './personagem.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreatePersonagemDTO } from './dtos/create-personagem.dto';
import { UpdatePersonagemDTO } from './dtos/update-personagem.dto';
import { UpdateNomeAventureiroPorIdentificadorDTO } from './dtos/update-nome-aventureiro-por-identificador.dto';
import { AddItemMagicoAoPersonagemDTO } from './dtos/add-item-magico-ao-personagem.dto';
import { ItensMagicosType } from 'src/itens-magicos/enums/itens-magicos.enum';
import { ItemMagico } from 'src/itens-magicos/schemas/item-magico.schema';

@Controller('personagens')
export class PersonagensController {

    constructor(private readonly personagemService: PersonagemService) {}

    @Post('/create-personagem')
    @ApiOperation({ summary: "Criar um novo Personagem." })
    @ApiResponse({ status: 201, description: "Personagem criado com Sucesso!" })
    @ApiResponse({ status: 400, description: "Erro de validação. Possíveis causas: pontos de força e defesa somados não são iguais a 10, valores não numéricos ou valores negativos." })
    async create(@Body() createPersonagemDTO: CreatePersonagemDTO) {
        return await this.personagemService.create(createPersonagemDTO);
    }

    @Get('/find-all-personagens')
    @ApiOperation({ summary: "Listar todos os Personagens." })
    @ApiResponse({ status: 200, description: "Lista de Personagens retornada com sucesso!" })
    async findAll() {
        return await this.personagemService.findAll();
    }

    @Get('/find-personagem-by-id/:id')
    @ApiOperation({ summary: "Buscando um Personagem por Id." })
    @ApiResponse({ status: 200, description: "Personagem encontrado com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    async findById(@Param('id') id: String) {
        return await this.personagemService.findById(id);
    }

    @Delete('/delete-personagem-by-id/:id')
    @ApiOperation({ summary: "Deletar um Personagem por Id." })
    @ApiResponse({ status: 200, description: "Personagem removido com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    async deleteById(@Param('id') id: String) {
        return await this.personagemService.deleteById(id);
    }

    @Patch('/update-personagem-by-id/:id')
    @ApiOperation({ summary: "Atualizar um Personagem por Id." })
    @ApiResponse({ status: 200, description: "Personagem atualizado com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    async updateById(@Param('id') id: String, @Body() updatePersonagemDTO: UpdatePersonagemDTO) {
        return await this.personagemService.updateById(id, updatePersonagemDTO);
    }   

    //------------------------------Rotas--Adicionais----------------------------------------------------//

    @Get('/find-personagem-by-identificador/:identificador')
    @ApiOperation({ summary: "Buscando um Personagem por Identificador." })
    @ApiResponse({ status: 200, description: "Personagem atualizado com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'identificador', description: "Identificador do Personagem." })
    async findPersonagemByIdentificador(@Param('identificador') identificador: String) {
        return await this.personagemService.findPersonagemByIdentificador(identificador);
    }

    @Patch('/update-nome-aventureiro-by-identificador/:identificador')
    @ApiOperation({ summary: "Atualizando o Nome Aventureiro do Personagem por Identificador." })
    @ApiResponse({ status: 200, description: "Personagem atualizado com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'identificador', description: "Identificador do Personagem." })
    async updateNomeAventureiroByIdentificador(@Param('identificador') identificador: String, @Body() updateNomeAventureiroPorIdentificadorDTO: UpdateNomeAventureiroPorIdentificadorDTO) {
        return await this.personagemService.updateNomeAventureiroByIdentificador(identificador, updateNomeAventureiroPorIdentificadorDTO);
    }

    @Patch('/add-ou-remover-item-magico-ao-personagem/:id')
    @ApiOperation({ summary: "Adicionando ou Removendo Itens Magicos do Personagem por Id." })
    @ApiResponse({ status: 200, description: "Item adicionado ou removido com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    async addOuRemoverItemMagicoAoPersonagem(@Param('id') id: String, @Body() addItemMagicoAoPersonagemDTO: AddItemMagicoAoPersonagemDTO) {
        return await this.personagemService.addOuRemoverItemMagicoAoPersonagem(id, addItemMagicoAoPersonagemDTO);
    }

    @Get('/find-amuleto-personagem/:id')
    @ApiOperation({ summary: "Buscando Amuleto do Personagem por Id." })
    @ApiResponse({ status: 200, description: "Amuleto retornado com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    async findAmuletoPersonagem(@Param('id') id: String, @Query() tipoDoItem: ItensMagicosType.AMULETO) {
        return await this.personagemService.findAmuletoPersonagem(id, tipoDoItem);
    }

    @Get('/find-all-itens-magicos-do-personagem/:id')
    @ApiOperation({ summary: "Buscando todos os Itens Magicos do Personagem por Id." })
    @ApiResponse({ status: 200, description: "Itens Magicos retornados com sucesso!" })
    @ApiResponse({ status: 404, description: "Personagem não encontrado." })
    @ApiParam({ name: 'id', description: "Id do Personagem." })
    @ApiParam({ name: 'nomeItem', description: "Nome do Item." })
    async findAllItensMagicosDoPersonagem(@Param('id') id: String) {
        return await this.personagemService.findAllItensMagicosDoPersonagem(id);
    }
}
