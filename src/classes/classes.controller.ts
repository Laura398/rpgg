import { Controller, Delete, Get } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Get('all')
  createMany() {
    return this.classesService.createMany();
  }

  @Get()
  findAll() {
    return this.classesService.findAll();
  }

  @Delete()
  deleteAll() {
    return this.classesService.deleteAll();
  }
}
