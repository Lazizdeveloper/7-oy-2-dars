import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: { email: string; password: string; name: string }) {
    return await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findOne({ where: { id } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('Foydalanuvchi topilmadi');
    }
    return user.update(updateUserDto);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('Foydalanuvchi topilmadi');
    }
    return user.destroy();
  }
}