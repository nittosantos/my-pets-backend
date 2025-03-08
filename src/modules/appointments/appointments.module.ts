import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AppointmentsService } from './services/appointments.service';
import { AppointmentsController } from './controllers/appointments.controller';

@Module({
  imports: [PrismaModule],
  providers: [AppointmentsService],
  controllers: [AppointmentsController],
})
export class AppointmentsModule {}
