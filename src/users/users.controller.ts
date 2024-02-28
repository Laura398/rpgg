import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterQuery, MongooseQueryOptions } from 'mongoose';
import { User } from './entities/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('find-many')
  findMany(@Body() selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    return this.usersService.findMany(selector, options);
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('find-one')
  findOne(@Body() selector: FilterQuery<User>, options?: MongooseQueryOptions) {
    return this.usersService.findOne(selector, options);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}