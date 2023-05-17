import { Controller, Get, Patch, Put } from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { userDto } from './user.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

  @Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id)
	}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Put('profile')
  async getNewTokens(@CurrentUser('id') id: number, @Body(),
  dto:userDto) {
    return this.userService.updateProfile(id, dto)
  }



  @Auth()
  @HttpCode(200)
  @Patch('profile/favorites/:productId')
  async toggleFavorite(@CurrentUser('id') id: number, @Body(),
  dto:userDto) {
    return this.userService.updateProfile(id, dto)
  }

}
