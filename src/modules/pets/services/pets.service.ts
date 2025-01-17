import { Injectable } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePetDtoType } from '../dtos/create-pet.dto';
import { UpdatePetDto } from '../dtos/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPet(data: CreatePetDtoType & { userId: string }): Promise<Pet> {
    const { userId, name, type, breed, age } = data;

    return this.prisma.pet.create({
      data: {
        name,
        type,
        breed,
        age,
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAllPets(userId: string): Promise<Pet[]> {
    return this.prisma.pet.findMany({ where: { userId } });
  }

  async updatePet(id: string, data: UpdatePetDto): Promise<Pet> {
    return this.prisma.pet.update({
      where: { id },
      data,
    });
  }

  async deletePet(id: string): Promise<Pet> {
    return this.prisma.pet.delete({ where: { id } });
  }
}
