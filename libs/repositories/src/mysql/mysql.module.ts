import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@libs/repositories/mysql/entities/user.entity'; 
import { UserRepository } from './services/users-repository.service'; 
require('dotenv').config()
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOSTNAME,
    port: 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}',],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([
    UserEntity,
 
  ]),
],
  providers: [UserRepository],
  exports: [UserRepository], 
})
export class MysqlModule {}