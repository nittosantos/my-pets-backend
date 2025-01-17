import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PetsController } from './controllers/pets.controller';
import { PetsService } from './services/pets.service';

@Module({
  imports: [PrismaModule],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
