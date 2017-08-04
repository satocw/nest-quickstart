import { Middleware, NestMiddleware } from "@nestjs/common";

@Middleware()
export class LoggingMiddleWare implements NestMiddleware {
    resolve(): (req, res, next) => void {
        return (req, res, next) => {
            console.log('Request...');
            next();
        }
    }
}