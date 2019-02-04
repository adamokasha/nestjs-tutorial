import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  resolve(name: string): MiddlewareFunction {
    return (req, res, next) => {
      console.log(`[${name}] Request...`); // [ApplicationModule] Request...
      next();
    };
  }
}
