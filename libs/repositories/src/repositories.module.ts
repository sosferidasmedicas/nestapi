import { Module } from '@nestjs/common';
import { MysqlModule } from './mysql/mysql.module';
import { UserRepository } from './mysql/services/users-repository.service';

@Module({
  imports: [MysqlModule],
  exports: [MysqlModule],
})
export class RepositoriesModule {}
