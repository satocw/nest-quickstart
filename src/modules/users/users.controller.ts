import { Controller, Get, Post, HttpStatus, Res } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    async getAllUsers(@Res() res) {
        console.log('GET /users');
        const users = await this.usersService.getAllUsers()
        res.status(HttpStatus.OK).json(users);
    }
}