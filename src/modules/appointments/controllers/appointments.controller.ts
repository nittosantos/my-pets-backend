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
import { CreateAppointmentDto } from '../dtos/create-appointment.dto';
import { UpdateAppointmentDto } from '../dtos/update-appointment.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { AppointmentsService } from '../services/appointments.service';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  async create(@Body() data: CreateAppointmentDto) {
    return this.appointmentsService.createAppointment(data);
  }

  @Get(':petId')
  async getAppointments(@Param('petId') petId: string) {
    return this.appointmentsService.getAppointments(petId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateAppointmentDto) {
    return this.appointmentsService.updateAppointment(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.appointmentsService.deleteAppointment(id);
  }
}
