import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/siningin-user-dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
    
    ) {

  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.create(createUserDto);
  }

  @Post('/login')
  signin(@Body() loginDto: LoginUserDto) {
    return this.usersService.signin(loginDto);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

}
