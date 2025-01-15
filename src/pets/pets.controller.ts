import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('pets')
@UseGuards(JwtAuthGuard)
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async createPet(
    @Body() body: { name: string; type: string; breed?: string; age?: number },
    @Body('userId') userId: string,
  ) {
    return this.petsService.createPet({ ...body, userId });
  }

  @Get()
  async findAllPets(@Body('userId') userId: string) {
    return this.petsService.findAllPets(userId);
  }

  @Patch(':id')
  async updatePet(
    @Param('id') id: string,
    @Body()
    body: Partial<{ name: string; type: string; breed?: string; age?: number }>,
  ) {
    return this.petsService.updatePet(id, body);
  }

  @Delete(':id')
  async deletePet(@Param('id') id: string) {
    return this.petsService.deletePet(id);
  }
}
