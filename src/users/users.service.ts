import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'libs/repositories/src/mysql/services/users-repository.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from '../../libs/repositories/src/mysql/entities/user.entity';
import { LoginUserDto } from './dto/siningin-user-dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  signin(login: LoginUserDto) {
    const user = login.usuario
    const password = login.password

    this.userRepository.login(user, password)
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
