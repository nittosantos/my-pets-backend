import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/modules/users/services/users.service';
import { LoginDtoType } from '../dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginDtoType) {
    const { email, password } = body;

    const user = await this.usersService.findByEmail(email);
    if (
      user &&
      (await this.authService.validateUser(password, user.password))
    ) {
      return this.authService.login(user);
    }
    throw new BadRequestException('Credenciais inválidas.');
  }
}
