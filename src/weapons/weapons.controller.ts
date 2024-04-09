import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { WeaponsService } from './weapons.service';

@Controller('weapons')
export class WeaponsController {
  constructor(private readonly weaponsService: WeaponsService) {}

  @Get('all')
  createMany() {
    return this.weaponsService.createMany();
  }

  @Get()
  findAll() {
    return this.weaponsService.findAll();
  }

  @Post('list-by-character')
  findListByCharacter(@Body() characterId: string) {
    return this.weaponsService.findListByCharacter(characterId);
  }

  @Delete()
  deleteAll() {
    return this.weaponsService.deleteAll();
  }
}
