import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@libs/repositories/mysql/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { json } from 'stream/consumers';
import { response } from 'express';


@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private dataSource: DataSource,
    ) {}

    async login(usuario: string, password: string): Promise<UserEntity | string> {
      const user = await this.userRepository.findOne({
        where: {email: usuario},
      });

      if(user){
       const isValidPassword = bcrypt.compareSync(password, user.password);
       if(isValidPassword){
        user.password = ''
       return user
       }else{
        return 'Usúario/Senha Inválido'
       }
       
      }

    }

}
