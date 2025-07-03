import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: any) {
    const { fullName, email, password } = body;
    return this.authService.signup(fullName, email, password);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { token } = await this.authService.login(email, password);

    res.cookie('jwt', token, {
  httpOnly: true,
  sameSite: 'lax',
  secure: false, // ✅ Force cookie to be stored on localhost
});
    return { message: 'Login successful' };
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Logged out' };
  }

  // 👇 Existing route
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@GetUser() user) {
    return this.authService.getProfile(user.userId);
  }

  // ✅ NEW alias route for frontend
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfileAlias(@GetUser() user) {
    return this.authService.getProfile(user.userId);
  }
}
