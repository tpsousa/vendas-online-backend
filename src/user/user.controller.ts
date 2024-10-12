import { Body, Controller, Post } from '@nestjs/common';
import { createUserDtos } from 'src/dtos/user.module.dtos';

@Controller('user')
export class UserController {

  @Post()
  async createUser(@Body() createUser: createUserDtos){
    return {
      ...createUser,
      password: undefined
    }
  }
}
