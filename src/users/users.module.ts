import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RepositoriesModule } from 'libs/repositories/src';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [RepositoriesModule]
})
export class UsersModule {}
