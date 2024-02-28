import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { FilterQuery, MongooseQueryOptions } from 'mongoose';
import { AuthGuard } from 'src/guards/auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

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