import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const verifyEmail = await this.findOneByEmail(createUserDto.email);
    if (verifyEmail) {
      return {
        message: 'Email already exists',
        error: true,
      };
    }
    const { password, ...userData } = createUserDto;

    const hashPassword = await bcrypt.hash(password, 10);
    if (!hashPassword) {
      return {
        message: 'Error hashing password',
        error: true,
      };
    }

    const user = await this.prisma.user.create({
      data: {
        ...userData,
        password: hashPassword,
      },
    });

    return user;
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
