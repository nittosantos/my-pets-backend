import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Pet } from '@prisma/client';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPet(data: {
    name: string;
    type: string;
    breed?: string;
    age?: number;
    userId: string;
  }): Promise<Pet> {
    return this.prisma.pet.create({
      data,
    });
  }

  async findAllPets(userId: string): Promise<Pet[]> {
    return this.prisma.pet.findMany({
      where: { userId },
    });
  }

  async updatePet(id: string, data: Partial<Pet>): Promise<Pet> {
    return this.prisma.pet.update({
      where: { id },
      data,
    });
  }

  async deletePet(id: string): Promise<Pet> {
    return this.prisma.pet.delete({
      where: { id },
    });
  }
}
