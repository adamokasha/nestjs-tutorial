import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

/* 
Nest encapsulates providers inside the module scope. 
You aren't able to use the module providers elsewhere without importing them. 
But sometimes, you may just want to provide a set of things which should be 
available always - out-of-the-box, for example: helpers, database connection,
whatever. That's why you're able to make the module a global one.

The @Global() decorator makes the module global-scoped. 
Global modules shall be registered only once , in best case by the root or 
core module. Afterward, the CatsService provider will be ubiquitous, 
although CatsModule won't be imported.
*/
@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})

/* 
A module class can inject providers as well (e.g. for configuration purposes):
 */
export class CatsModule {
  constructor(private readonly catsService: CatsService) {}
}
