import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAppointmentDtoType } from '../dtos/create-appointment.dto';
import { UpdateAppointmentDtoType } from '../dtos/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async createAppointment(data: CreateAppointmentDtoType) {
    return this.prisma.appointment.create({
      data: {
        date: new Date(data.date),
        vetName: data.vetName,
        reason: data.reason,
        notes: data.notes,
        pet: { connect: { id: data.petId } },
      },
    });
  }

  async getAppointments(petId: string) {
    return this.prisma.appointment.findMany({ where: { petId } });
  }

  async updateAppointment(id: string, data: UpdateAppointmentDtoType) {
    return this.prisma.appointment.update({ where: { id }, data });
  }

  async deleteAppointment(id: string) {
    return this.prisma.appointment.delete({ where: { id } });
  }
}
