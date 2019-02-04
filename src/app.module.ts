import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleWare } from './common/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})

/*
Modules that include middleware have to implement the NestModule 


Note that exclude() method won't work with your functional middleware. 
In addition, this function doesn't exclude paths from more generic 
routes (e.g. wildcards). In such case, you should rather put your 
paths-restriction logic directly to the middleware and, for example, 
compare a request's URL.
 */
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleWare)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
      )
      .with('ApplicationModule')
      .forRoutes(CatsController);
  }
}
