import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() data: CreateTaskDto) {
    return this.tasksService.createTask(data);
  }

  @Get(':petId')
  async getTasks(@Param('petId') petId: string) {
    return this.tasksService.getTasks(petId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return this.tasksService.updateTask(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tasksService.deleteTask(id);
  }
}
