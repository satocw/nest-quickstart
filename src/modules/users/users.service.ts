import { Component } from "@nestjs/common";
import { HttpException } from "@nestjs/core";

@Component()
export class UsersService {
    private users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Alice Caeiro" },
        { id: 3, name: "Who Knows" },
    ];

    getAllUsers() {
        return Promise.resolve(this.users);
    }
}