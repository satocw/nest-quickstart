import { Middleware, NestMiddleware } from "@nestjs/common";

// 順序テスト用に作成した
@Middleware()
export class LoggingMiddleWare2 implements NestMiddleware {
    resolve(): (req, res, next) => void {
        return (req, res, next) => {
            console.log('Request2...');
            next();
        }
    }
}