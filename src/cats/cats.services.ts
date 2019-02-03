/*
Controllers shall handle HTTP requests and delegate more complex tasks 
to the services. The PROVIDERS (THIS) are plain JavaScript classes with an 
@Injectable() decorator on top of them.
*/

import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
