import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  //Creae a new task
  createTask(taskData: Partial<Task>) {
    const task = this.tasksRepo.create(taskData);
    return this.tasksRepo.save(task);
  }

  //Get a task by id
  getTask(id: number) {
    return this.tasksRepo.findOne({ where: { id }, relations: ['user'] });
  }

  //Get all tasks
  getAllTasks() {
    return this.tasksRepo.find({ relations: ['user'] });
  }

  // Update a task
  async updateTask(id: number, updateData: Partial<Task>) {
    await this.tasksRepo.update(id, updateData); // or inline logic
    return this.getTask(id);
  }

  //Delete tasks by id
  deleteTask(id: string) {
    console.log(id);
    return { message: 'success' };
  }

  //Find tasks by user
  findByUser(userId, number) {
    return this.tasksRepo.find({
      where: { user: { id: userId } },
    });
  }
}
