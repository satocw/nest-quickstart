import { Controller, Get, Post, HttpStatus, Res } from "@nestjs/common";

@Controller('test')
export class AnotherController {

    constructor() {}

    @Get()
    async getTest(@Res() res) {
        console.log('GET /test');
        res.status(HttpStatus.OK).json({"path": "test"});
    }
}