import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { LoggingMiddleWare } from "./logging.middleware";

@Module({
    modules: [],
    controllers: [ UsersController ],
    components: [ UsersService ]
})
export class UsersModule {
    configure(consumer: MiddlewaresConsumer) {
        // consumer.apply(LoggingMiddleWare).forRoutes(UsersController);
        consumer.apply(LoggingMiddleWare).forRoutes({
            path: '*', method: RequestMethod.ALL
        });
    }
}