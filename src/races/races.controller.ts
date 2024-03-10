import { Body, Controller, Get, Post } from '@nestjs/common';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
    constructor(private readonly racesService: RacesService) {}

    @Post()
    create(@Body() data: any) {    
        return this.racesService.create(data);
    }

    @Get('create-many')
    createMany() {    
        return this.racesService.createMany();
    }

    @Get()
    findAll() {
        return this.racesService.findAll();
    }
    
    @Post('find-one')
    findOne(@Body() selector: any, options?: any) {    
        return this.racesService.findOne(selector, options);
    }
}
