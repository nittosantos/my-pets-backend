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
  BadRequestException,
} from '@nestjs/common';
import { PetsService } from '../services/pets.service';
import { CreatePetDtoType } from '../dtos/create-pet.dto';
import { UpdatePetDtoType } from '../dtos/update-pet.dto';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(
    @Body() createPetDto: CreatePetDtoType,
    @Request() req: { user: { userId: string } },
  ) {
    const userId = req.user.userId;
    return this.petsService.createPet({ ...createPetDto, userId });
  }

  @Get()
  async findAllPets(@Request() req: { user: { userId: string } }) {
    const userId = req.user.userId;
    return this.petsService.findAllPets(userId);
  }

  @Patch(':id')
  async updatePet(
    @Param('id') id: string,
    @Body() updatePetDto: Partial<UpdatePetDtoType>,
  ) {
    if (!Object.keys(updatePetDto).length) {
      throw new BadRequestException(
        'O corpo da requisição não pode estar vazio.',
      );
    }
    return this.petsService.updatePet(id, updatePetDto);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: string) {
    return this.petsService.deletePet(id);
  }
}
