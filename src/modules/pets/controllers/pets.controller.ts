import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { PetsService } from '../services/pets.service';
import { CreatePetDto } from '../dtos/create-pet.dto';
import { UpdatePetDto, UpdatePetSchema } from '../dtos/update-pet.dto';

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(@Body() createPetDto: CreatePetDto, @Request() req: any) {
    const userId = req.user.id;
    return this.petsService.createPet({ ...createPetDto, userId });
  }

  @Get()
  async findAllPets(@Request() req: any) {
    const userId = req.user.id;
    return this.petsService.findAllPets(userId);
  }

  @Patch(':id')
  async updatePet(
    @Param('id') id: string,
    @Body() body: Partial<UpdatePetDto>,
  ) {
    const parsedData = UpdatePetSchema.parse(body);
    return this.petsService.updatePet(id, parsedData);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: string) {
    return this.petsService.deletePet(id);
  }
}
