import { Injectable } from '@nestjs/common';
import { Pet } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async createPet(data: {
    name: string;
    type: string;
    breed?: string;
    age?: number;
    userId: string;
  }) {
    return this.prisma.pet.create({
      data: {
        name: data.name,
        type: data.type,
        breed: data.breed,
        age: data.age,
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
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
