import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UsersService } from 'src/modules/users/services/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.usersService.findByEmail(body.email);
    if (
      user &&
      (await this.authService.validateUser(body.password, user.password))
    ) {
      return this.authService.login(user);
    }
    throw new Error('Invalid credentials');
  }
}
