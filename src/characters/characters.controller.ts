import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { Character } from './entities/character.entity';
import { FilterQuery, MongooseQueryOptions } from 'mongoose';
import { RequestType } from 'src/interfaces/types';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Post('find-many')
  findMany(@Body() selector: FilterQuery<Character>, options?: MongooseQueryOptions) {
    return this.charactersService.findMany(selector, options);
  }

  @UseGuards(AuthGuard)
  @Get('find-many')
  findManyByUserId(@Request() request: RequestType, options?: MongooseQueryOptions) {
    const selector = { user: request.user._id };
    return this.charactersService.findMany(selector, options);
  }

  @UseGuards(AuthGuard)
  @Get('random')
  randomize(@Request() request: RequestType) {
    return this.charactersService.randomize(request);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.charactersService.findOneById(id);
  }

  @Post('find-one')
  findOne(@Body() selector: FilterQuery<Character>, options?: MongooseQueryOptions) {    
    return this.charactersService.findOne(selector, options);
  }
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Request() request: RequestType, @Body() createCharacterDto: CreateCharacterDto) {    
    return this.charactersService.create(request, createCharacterDto);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharacterDto: UpdateCharacterDto) {
    return this.charactersService.update(id, updateCharacterDto);
  }
  
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersService.remove(id);
  }

  @UseGuards(AuthGuard)
  @Delete()
  deleteAll() {
    return this.charactersService.deleteAll();
  }
}
