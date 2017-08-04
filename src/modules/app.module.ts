import { Module } from '@nestjs/common';
import { UsersModule } from "./users/users.module";
import { AnotherController } from "./for-test/another.controller";

@Module({
    modules: [ UsersModule ],
    controllers: [ AnotherController ]
})
export class ApplicationModule {}