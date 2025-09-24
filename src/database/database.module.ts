import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'Laziz2006.',
      database: 'nestjs_db',
      autoLoadModels: true,
      synchronize: true, 
      models: [User],
    }),
    SequelizeModule.forFeature([User]),
  ],
})
export class DatabaseModule {}