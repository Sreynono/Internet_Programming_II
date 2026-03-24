import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  getUser(id: number) {
    return this.userRepo.findOne({ where: { id }, relations: ['tasks']});
  }

  createUser(userData: Partial<User>) {
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  updateUser(id: number, updateData: Partial<User>) {
    return this.update(id, updateData);
  }

  findAll() {
    return this.userRepo.find({ relations: ['tasks'] });
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id }, relations: ['tasks'] });
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }

  async update(id: number, updateData: Partial<User>) {
    await this.userRepo.update(id, updateData);
    return this.findOne(id);
  }
}
