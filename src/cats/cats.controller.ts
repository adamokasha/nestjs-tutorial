import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Param,
  Body,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  /*
    The CatsService is injected through the class constructor. 
    Don't be afraid of the private readonly shortened syntax. 
    It means that we've created and initialized the catsService member 
    immediately in the same location.
*/
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param('id') id) {
  //     console.log(id);
  //     return `This action returns a #${id} cat`;
  //   }

  //   @Put(':id')
  //   PaymentRequestUpdateEvent(@Param('id') id, @Body() updateCatDto) {
  //     return `This action updates a #${id} cat`;
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id) {
  //     return `This action removes a #${id} cat`;
  //   }
}
