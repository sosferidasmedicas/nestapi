import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '@libs/repositories/mysql/entities/user.entity';
import { DataSource, Repository } from 'typeorm';


@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private dataSource: DataSource,
    ) {}

    async login(usuario: string, password: string): Promise<UserEntity> {
     
      const user = await this.userRepository.findOne({
        where: {email: usuario},
      });

      return user;
    }

}
