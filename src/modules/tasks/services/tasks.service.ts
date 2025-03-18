import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDtoType } from '../dtos/create-task.dto';
import { UpdateTaskDtoType } from '../dtos/update-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: CreateTaskDtoType) {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        date: new Date(data.date),
        recurrence: data.recurrence,
        pet: { connect: { id: data.petId } },
      },
    });
  }

  async getTasks(petId: string) {
    return this.prisma.task.findMany({ where: { petId } });
  }

  async updateTask(id: string, data: UpdateTaskDtoType) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async deleteTask(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
